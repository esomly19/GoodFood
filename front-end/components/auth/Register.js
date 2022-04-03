import React, { Component } from 'react';
import { Button, Container, Grid, GridItem, Input, ScaleFade, Text } from '@chakra-ui/react';
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

export default class Register extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScaleFade initialScale={0.9} in={true}>
        <Container textAlign={"center"} w={'80%'}>
          <Input placeholder="Email" bg={'goodfood.white'} mt={10} />
          <Input placeholder="Nom d'utilisateur" bg={'goodfood.white'} type={"password"} mt={3}/>
          <Input placeholder="Mot de passe" bg={'goodfood.white'} mt={10} />
          <Input placeholder='Confirmer mot de passe' bg={'goodfood.white'} type={"password"} mt={3}/>
          <Button bg={"goodfood.red"} color={"goodfood.white"} w={"100%"} borderRadius={"100"} mt={50}>
            Se connecter
          </Button>
        </Container>
      </ScaleFade>
    );
  }
}
