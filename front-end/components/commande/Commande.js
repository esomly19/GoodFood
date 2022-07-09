import Panier from "./Panier";
import React from "react";
import {Container, Flex, Input, InputGroup, InputRightElement, ScaleFade} from "@chakra-ui/react";
import {AiOutlineSearch} from "react-icons/ai";
import {BsBasket2Fill} from "react-icons/bs";
import {IoFastFoodSharp} from "react-icons/io5";
import {RiAccountCircleFill} from "react-icons/ri";
import Plats from "./Plats";
import MonPanier from "./MonPanier";

export default class Commande extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            state: "plats"
        }
        this.platsRef = React.createRef();
        this.panierRef = React.createRef();
    }
    render() {
        const {state} = this.state;
        return (
            <Flex h={"100%"} flexDirection={"column"} >
                <Panier ref={this.panierRef}/>
                {state === "plats" ?
                    <Plats ref={this.platsRef} panier={this.panierRef} restaurant={this.props.restaurant}/> :
                    state === "panier" ? <MonPanier panier={this.panierRef} /> :
                        state === "compte" ? <></> : null
                }
                <Flex marginTop={"auto"} paddingTop={5} flexDirection={"row"} bg={"goodfood.grey"}
                      justifyContent={"space-between"} margin={0} paddingBottom={5} paddingLeft={50} paddingRight={50}>
                    <IoFastFoodSharp cursor={"pointer"} onClick={() => this.setState({state: "plats"})}/>
                    <BsBasket2Fill cursor={"pointer"} onClick={() => this.setState({state: "panier"})}/>
                    <RiAccountCircleFill cursor={"pointer"} onClick={() => this.setState({state: "compte"})}/>
                </Flex>
            </Flex>)
    }
}
