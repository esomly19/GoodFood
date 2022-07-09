import React from 'react';
import {Badge, Container, Flex, Image, Input, InputGroup, InputRightElement, ScaleFade, Text} from "@chakra-ui/react";
import {instancePlat} from "../../utils/axiosInstance";
import {AiFillStar, AiOutlineSearch} from "react-icons/ai";

import {BsFillPlusCircleFill} from "react-icons/bs";

export default class Plats extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            plats:[],
            search:""
        }
    }


    async componentDidMount() {
        const {data}=await instancePlat.post("/id",{restaurant_id:this.props.restaurant.id});
        this.setState({plats:data});
    }

    handleSearch = ({target}) => this.setState({search: target.value});

    renderPlats = (plat)=>{
        return(
          <Container marginTop={10} borderRadius={20} p={0} flexDirection={"row"} bg={"goodfood.white"}>
              <Image src={plat.image} h={"150px"} w={"100%"} borderTopRadius={20}/>
              <Flex flexDirection={"column"} pl={5} pr={5}>
                  <Text as={"i"} fontSize={15} mt={2}>Japonais</Text>
              <Flex justifyContent={"space-between"}>
                      <Text color={'goodfood.blue'} fontSize='20px'>{plat.nom}</Text>
                      <Badge variant='solid' colorScheme='green' display={"flex"} alignItems={"center"} borderRadius={20} p={2}>
                  <Text marginRight={1}>4.5</Text>
                  <AiFillStar size={15}/>
                      </Badge>
                  </Flex>
                  <Flex justifyContent={"space-between"} mt={2} mb={2} alignItems={"center"}>
                      <Text color='tomato' fontSize='30px'>{plat.prix_ttc}€</Text>
                      <BsFillPlusCircleFill color={"#FF724C"} size={30} cursor={"pointer"} style={{filter:"drop-shadow(0px 0px 5px #C0C0C0"}} onClick={()=>this.props.panier.current.addPlat(plat)}/>
                  </Flex>
              </Flex>
          </Container>
        );
    }

    render() {
        const {plats,search}=this.state;
        return(
            <>
                <Flex>
                    <InputGroup margin={10}>
                        <Input bg={"goodfood.white"} placeholder='Chercher un plat...' value={search} onChange={this.handleSearch}/>
                        <InputRightElement children={<AiOutlineSearch style={{cursor: "pointer"}}/>}/>
                    </InputGroup>
                </Flex>
                <Flex bg={"goodfood.grey"} h={"100%"} overflowY={"scroll"} flexDirection={"column"} paddingX={10} borderTopRadius={20}>

                    <ScaleFade initialScale={0.9} in={true}>
                        {plats.map(this.renderPlats)}
                    </ScaleFade>
                </Flex>
            </>
        );
    }
}
