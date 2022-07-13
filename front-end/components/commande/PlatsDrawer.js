import React from 'react'
import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    Container, Box, Image, Tag, TagLabel, Flex, Heading, Text, HStack
} from '@chakra-ui/react';
import {BsArrowLeftCircleFill, BsBasket2Fill} from "react-icons/bs";
import {capitalizeFirstLetter} from "../../utils/stringUtils";
import Select from 'react-select';
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";

export default class PlatsDrawer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            plat: null,
            selectedSupplements:[],
            quantite:1,
        };
    }

    handleOpen = (plat) => {
        this.setState({open: true, plat});
    }

    handleClose = () => {
        this.setState({open: false,quantite:1, selectedSupplements:[], plat: null});
    }

    calculPrix = () =>{
        const {plat,selectedSupplements,quantite} = this.state;
        if(!plat)return;
        let prix = plat.prix_ttc;
        let supplements = selectedSupplements.length?selectedSupplements.map((supplement)=>supplement.value.prix).reduce((acc,supplement)=>acc+supplement):0;
        return (quantite * (prix + supplements)).toFixed(2);
    }

    handleAjouterPlat = () => {
        const {plat,selectedSupplements,quantite} = this.state;
        let finalPlat =plat;
        finalPlat.quantite = quantite;
        finalPlat.selectedSupplements = selectedSupplements.map((supplement)=>({...supplement.value}));
        this.props.panier.current.addPlat(finalPlat,this.handleClose);
    }

    render() {
        let {open, plat, selectedSupplements,quantite} = this.state;
        plat = plat ?? {};
        return (
            <Drawer placement={'bottom'} onClose={this.handleClose} isOpen={open} size={"full"}>
                <DrawerOverlay/>
                <DrawerContent display={"flex"} className={"container-auth"} bg={"none"}>
                    <Container h={"100vh"} w={"100vw"} className={"container-auth"} borderTopRadius={10}
                               overflow={"scroll"} bg={"goodfood.grey"}>
                        <BsArrowLeftCircleFill onClick={this.handleClose} color={"#FF724C"} size={35} cursor={"pointer"}
                                               style={{position: "absolute", marginTop: 10, marginLeft: 10}}/>
                        <Image src={plat.image} height={300} objectFit='cover' zIndex={-50} marginBottom={-100}/>
                        <Tag size='lg' bg={"white"} borderRadius='full' position='relative' top={5} marginLeft={50}
                             zIndex={100} style={{filter: "drop-shadow(0px 0px 5px #000000"}}>
                            <TagLabel>{plat.nom}</TagLabel>
                        </Tag>
                        <Flex position={"relative"} flexDirection={"column"} bg={"goodfood.grey"} borderTopRadius={40}
                              padding={12}>
                            <Heading size={"md"}>Description</Heading>
                            <Text mt={8}>{plat.description}</Text>
                            <Box borderColor={"goodfood.blue"} borderWidth={1} borderRadius={20} padding={3}
                                 marginTop={10}>
                                <Heading size={"sm"}>Ingredients</Heading>
                                <HStack spacing="10px">
                                    {plat.list_ingredient?.map((ingredient,key) =>
                                        <Box key={key} w="100px" h="40px" justifyContent={"center"} alignItems={"center"}
                                             display={"flex"}>
                                            {capitalizeFirstLetter(ingredient)}
                                        </Box>
                                    )}
                                </HStack>
                            </Box>
                            <Flex  mt={5} flexDirection={"column"}>
                                <Heading size={"sm"}>Suppléments</Heading>
                                <Select
                                    isMulti
                                    placeholder={"Ajouter un supplément"}
                                    name="supplements"
                                    options={plat.supplements?.map(JSON.parse).map((supplement) => (
                                        {
                                            value:supplement,
                                            label:<div style={{justifyContent: 'space-between',display: 'flex'}}><span>{capitalizeFirstLetter(supplement.ingredient)}</span>&nbsp;<span style={{color: "#FF724C"}}>{supplement.prix}€</span></div>
                                        })
                                    )}
                                    styles={colourStyles}
                                    value={selectedSupplements}
                                    onChange={(data) => this.setState({selectedSupplements:data})}
                                />
                                <Box mt={50} bg={"goodfood.red"} p={5} borderRadius={40} display={"flex"} color={"goodfood.white"} >
                                    <Flex flex={2}>{this.calculPrix()}€</Flex>
                                    <Flex flex={2}>
                                      <span
                                          style={{borderTopLeftRadius:10,borderBottomLeftRadius:10,borderRight:"none",borderColor:"white"}}
                                          className={"button-panier"}
                                          onClick={()=>quantite!==1?this.setState({quantite:quantite-1}):null}>
                                          <AiOutlineMinus/>
                                      </span>
                                      <span
                                          style={{borderLeft:"none",borderRight:"none",borderColor:"white"}}
                                          className={"button-panier"}>
                                          {quantite}
                                      </span>
                                      <span
                                          style={{borderTopRightRadius:10,borderBottomRightRadius:10,borderLeft:"none",borderColor:"white"}}
                                          className={"button-panier"}
                                          onClick={()=>this.setState({quantite:quantite+1})}>
                                          <AiOutlinePlus/>
                                      </span>
                                    </Flex>
                                    <Flex flex={2} justifyContent={"space-between"}><span></span><BsBasket2Fill size={25} cursor={"pointer"} onClick={this.handleAjouterPlat}/></Flex>
                                </Box>
                            </Flex>
                        </Flex>
                    </Container>
                </DrawerContent>
            </Drawer>
        );
    }
}

const colourStyles = {
    control: (styles) => ({...styles, borderColor: '#FF724C',borderRadius:20,marginTop:10})
};
