import React, { Component } from 'react';
import { Button, Container, Grid, GridItem, Input, ScaleFade, Text } from '@chakra-ui/react';
import {BsFacebook} from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { setCookie } from 'nookies';




export default class Login extends Component{
  constructor(props) {
    super(props);
  }
  onLogIn = () =>{
    setCookie(null, 'token', "salut");
  }

  render() {
    const {onLogIn} = this;

    return (
      <ScaleFade initialScale={0.9} in={true}>
        <Container textAlign={"center"} w={'80%'}>
          <Input placeholder="Email, Nom d'utilisateur" bg={'goodfood.white'} mt={10} />
          <Input placeholder='Mot de passe' bg={'goodfood.white'} type={"password"} mt={3}/>
          <Text align={'left'} cursor={"pointer"} mt={3} color={"goodfood.red"} fontSize={'sm'} onClick={this.props.reset}>Mot de passe oublié?</Text>
          <Button bg={"goodfood.red"} color={"goodfood.white"} w={"100%"} borderRadius={"100"} mt={50} onClick={onLogIn}>
            Se connecter
          </Button>
          <Text fontWeight={"bold"} my={8}>Ou</Text>
          <Button bg={"goodfood.facebook"} color={"goodfood.white"} w={"100%"} borderRadius={"100"} >
              <BsFacebook/>
              <Text marginLeft={5} noOfLines={2}>Se connecter avec Facebook</Text>
          </Button>
          <Button bg={"goodfood.white"} color={"goodfood.blue"} w={"100%"} borderRadius={"100"} mt={3} mb={16}>
            <FcGoogle/>
            <Text marginLeft={5} noOfLines={2}>{"Se connecter avec Google"}</Text>
          </Button>
        </Container>
      </ScaleFade>
    );
  }
}
