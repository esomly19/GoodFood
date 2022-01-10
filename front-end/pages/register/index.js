import React, {Component} from "react";
import Form from "../../components/register/Form";
import {Container, Flex, Heading} from "@chakra-ui/react";

export default class Auth extends Component{
    constructor(props) {
        super(props);
        this.state={
            show:false,
        }
    }

    render(){
        return(
            <Flex alignItems={"center"} justifyContent={"center"} w={"100%"}>
                <Container h={"fit-content"} variant={"white-round"} mt={5}>
                    <Heading textAlign={"center"} mb={5}>Inscription</Heading>
                    <Form />
                </Container>
            </Flex>
        );
    }

}