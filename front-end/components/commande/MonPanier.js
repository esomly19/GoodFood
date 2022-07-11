import React from "react";
import {Button, ButtonGroup, Container, Flex, Heading, Image, ScaleFade, Text} from "@chakra-ui/react";
import {AiOutlineMinus, AiOutlinePlus, AiOutlineShopping} from "react-icons/ai";

export default class MonPanier extends React.Component{
    constructor(props) {
        super(props);
    }
    renderPlats = (plat) => {
        let {panier}=this.props;
        panier=panier.current;
        return (
          <Flex h={"80px"} mt={2}>
              <Image objectFit='cover' src={plat.image} fallbackSrc='https://via.placeholder.com/150'  width={"20%"} borderRadius={5}/>
              <Flex alignItems={"center"} justifyContent={"space-between"} width={"100%"}>
                  <Text w={"33%"}> {plat.nom}</Text>
                  <ButtonGroup w={"33%"} size='sm' isAttached variant='outline' colorScheme={"orange"} >
                      <Button onClick={()=>panier.removePlat(plat,this.refresh)}><AiOutlineMinus/></Button>
                      <Button disabled={true}>{plat.quantite}</Button>
                      <Button onClick={()=>panier.addPlat(plat,this.refresh)}><AiOutlinePlus/></Button>
                  </ButtonGroup>
                  <Text w={"33%"} textAlign={"right"}>{(plat.prix_ttc*plat.quantite).toFixed(2)} €</Text>
              </Flex>
          </Flex>
        );
    }

    refresh = ()=>{
        this.setState({});
    }


    render() {
        const {panier}=this.props;
        const plats=panier.current.getPlats();
        return(
            <Flex h={"100%"} flexDirection={"column"} bg={"goodfood.grey"} borderTopRadius={20}>
                <ScaleFade initialScale={0.9} in={true}>
                    <Container>
                        <Flex alignItems={"center"} justifyContent={"space-between"} marginX={5} mt={5}>
                            <Heading size='lg'>Votre Commande</Heading>
                            <Flex>
                                <AiOutlineShopping size={25}/>
                                <Text>{plats.length}</Text>
                            </Flex>
                        </Flex>
                        <Flex bg={"goodfood.grey"} h={"100%"} overflowY={"scroll"} flexDirection={"column"} paddingX={10} borderTopRadius={20}>
                            {plats.map(this.renderPlats)}
                        </Flex>
                    </Container>
                </ScaleFade>
            </Flex>
        )
    }
}
