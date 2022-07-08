import Panier from "./Panier";
import React from "react";
import {Flex, Input, InputGroup, InputRightElement} from "@chakra-ui/react";
import {AiOutlineSearch} from "react-icons/ai";
import {BsBasket2Fill} from "react-icons/bs";
import {IoFastFoodSharp} from "react-icons/io5";
import {RiAccountCircleFill} from "react-icons/ri";
import {instancePlat} from "../../utils/axiosInstance";

export default class Commande extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            search:""
        }
    }

    async componentDidMount() {
        const {data}=await instancePlat.get("/");
        console.log(data)
    }

    handleSearch=({target})=>this.setState({search:target.value});

    render() {
        const {search}=this.state;
        const {handleSearch}=this;

        return(
            <Flex h={"100%"} flexDirection={"column"}>
                <Panier/>
                <Flex >
                    <InputGroup margin={10}>
                        <Input placeholder='Chercher un plat...' value={search} onChange={handleSearch} />
                        <InputRightElement children={<AiOutlineSearch style={{cursor:"pointer"}}/>} />
                    </InputGroup>
                </Flex>
                <Flex bg={"red"} h={"100%"} overflowY={"scroll"} flexDirection={"column"}>

                </Flex>
                <Flex marginTop={"auto"} paddingTop={5} marginBottom={5}  flexDirection={"row"} justifyContent={"space-between"} marginLeft={50} marginRight={50}>
                    <IoFastFoodSharp cursor={"pointer"}/>
                    <BsBasket2Fill cursor={"pointer"}/>
                    <RiAccountCircleFill cursor={"pointer"}/>
                </Flex>
            </Flex>)
    }
}
