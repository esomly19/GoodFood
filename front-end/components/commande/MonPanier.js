import React from "react";
import {Button, Center, Flex, Heading, Image, Text, Wrap, WrapItem} from "@chakra-ui/react";
import {AiOutlineMinus, AiOutlinePlus, AiOutlineShopping} from "react-icons/ai";
import {BsArrowRight} from "react-icons/bs";
import "react-datetime/css/react-datetime.css";
import 'moment/locale/fr';
import jwt from 'jwt-decode'
import Datetime from 'react-datetime';
import Lottie from "lottie-react";
import successAnimation from "../../lottie-json/success-animation.json";
import {instanceCommandes} from "../../utils/axiosInstance";
import {parseCookies} from "nookies";

export default class MonPanier extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            horraire: null,
            status: null
        }
    }
    renderPlats = (plat,index) => {
        let {panier}=this.props;
        panier=panier.current;
        return (
          <Flex h={"80px"} mt={2} key={index}>
              <Image objectFit='cover' src={plat.image} fallbackSrc='https://via.placeholder.com/150'  width={"20%"} borderRadius={5} alt={"logo"}/>
              <Flex alignItems={"center"} justifyContent={"space-between"} width={"100%"}>
                  <Text w={"40%"} pl={5}> {plat.nom} <Text as={"i"} fontSize='xs'>{plat.selectedSupplements.length?"(avec suppléments)":""}</Text> </Text>
                  <Flex w={"33%"} size='sm' variant='outline'paddingX={5}>
                      <span
                          style={{borderTopLeftRadius:10,borderBottomLeftRadius:10,borderRight:"none"}}
                          className={"button-panier"}
                          onClick={()=>panier.removePlatAtIndex(index,this.refresh)}>
                          <AiOutlineMinus/>
                      </span>
                      <span
                          style={{borderLeft:"none",borderRight:"none"}}
                          className={"button-panier"}>
                          {plat.quantite}
                      </span>
                      <span
                          style={{borderTopRightRadius:10,borderBottomRightRadius:10,borderLeft:"none"}}
                          className={"button-panier"}
                          onClick={()=>panier.addPlatAtIndex(index,this.refresh)}>
                          <AiOutlinePlus/>
                      </span>
                  </Flex>
                  <Text w={"20%"} textAlign={"right"}>{panier.calculPrix(plat,index)} €</Text>
              </Flex>
          </Flex>
        );
    }

    refresh = ()=>{
        this.setState({});
    }

    commander = async () => {
        try{
            const cookies = parseCookies()
            let id_client= jwt(cookies.token).id;
            await instanceCommandes.post("/",{
                id_restaurant:this.props.restaurant.id,
                id_client:id_client,
                horraire:this.state.horraire.format('LLL'),
                plats:this.props.panier.current.getPlatsWithoutImg().map(JSON.stringify),
                prix:parseFloat(this.props.panier.current.calculTotalPanier()),
                etat:"commander"
            });
            this.props.panier.current.refresh()
            this.setState({status:"sent"})
        }
        catch (e) {
            console.log(e)
            this.setState({status: null});
        }
    }


    render() {
        const {panier,restaurant}=this.props;
        const {horraire,status}=this.state;
        const plats=panier.current.getPlats();

        if(status==="sent") return(
            <Flex h={"100%"} flexDirection={"column"} bg={"goodfood.grey"} borderTopRadius={20} overflow={"scroll"}>
                    <Center flexDirection="column" h={"100%"}>
                        <Lottie animationData={successAnimation} />;
                        <Heading>Merci de votre commande</Heading>
                    </Center>
            </Flex>
        );


        return(

            <Flex h={"100%"} flexDirection={"column"} bg={"goodfood.grey"} borderTopRadius={20} overflow={"scroll"} className={"scnone"}>
                <Flex  h={"99%"} flexDirection={"column"}>
                    <Flex alignItems={"center"} justifyContent={"space-between"} marginX={5} mt={5}>
                        <Heading size='lg'>Votre Commande</Heading>
                        <Flex>
                            <AiOutlineShopping size={25}/>
                            <Text>{plats.length}</Text>
                        </Flex>
                    </Flex>
                    <Wrap bg={"goodfood.yellow"} color={"goodfood.blue"} justify='center' marginX={10} borderRadius={20} marginY={2}>
                        <WrapItem>
                            <Center>
                                <Image src={"/goodfood-apple.svg"} w={20} m={2} alt={"logo"}/>
                            </Center>
                        </WrapItem>
                        <WrapItem>
                            <Center flexDirection={"column"} justifyContent={"start"}  width={"200px"}>
                                <Heading size={"xs"} w={"100%"}>{restaurant.ville+", "+restaurant.pays}</Heading>
                                <Text w={"100%"}>{restaurant.adresse}</Text>
                                <Text w={"100%"}>{restaurant.tel}</Text>
                            </Center>
                        </WrapItem>
                        <WrapItem>
                            <Center paddingLeft={5}  h={"100%"}>
                                <Datetime
                                    locale={"fr"}
                                    dateFormat={false}
                                    value={horraire}
                                    onChange={(data)=>this.setState({horraire:data})}
                                    inputProps={{ placeholder: "Horraire" ,style: { borderRadius:20,padding:5,textAlign: "center", justifyContent:"center", width:100, textOverflow:"clip"}}}/>
                            </Center>
                        </WrapItem>
                    </Wrap>
                    <Flex bg={"goodfood.grey"} height={"100%"} flexDirection={"column"} paddingX={10}  >
                        <Flex  height={"400px"}  overflowY={"scroll"} className={"sc1"} flexDirection={"column"} >
                            {plats.map(this.renderPlats)}
                        </Flex>

                        {plats.length?
                            <Flex mt={"auto"} flexDirection={"column"}>
                                <Heading >Total: {panier.current.calculTotalPanier()}€</Heading>
                                <Center>
                                    <Button
                                        disabled={!horraire||status==="en cours"}
                                        isLoading={status==="en cours"}
                                        bg={"goodfood.red"}
                                        paddingLeft={10}
                                        color={"goodfood.white"}
                                        _hover={{color:"goodfood.blue"}}
                                        maxWidth={300}
                                        width={"100vw"}
                                        borderRadius={"100"}
                                        marginY={10}
                                        onClick={()=>this.setState({status:"en cours"},this.commander)}>
                                        Commander &nbsp;&nbsp;&nbsp;
                                        <BsArrowRight/>
                                    </Button>
                                </Center>

                            </Flex>
                            :null}
                    </Flex>
                </Flex>
            </Flex>

        )
    }
}
