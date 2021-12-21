import React, {Component} from "react";
import Form from "../../components/login/Form";
import {Container, Heading} from "@chakra-ui/react";

export default class Auth extends Component{
    constructor(props) {
        super(props);
        this.state={
            show:false,
        }
    }



    render(){

        return(
          <Container variant={"white-round"} mt={5}>
              <Heading textAlign={"center"} mb={5}>Inscription</Heading>
              <Form />
          </Container>
        );
    }

}