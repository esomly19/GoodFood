import React, { Component } from 'react';
import { Button, Container, Input, ScaleFade} from '@chakra-ui/react';

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
          <Button bg={"goodfood.red"} color={"goodfood.white"} w={"100%"} borderRadius={"100"} my={50}>
            Se connecter
          </Button>
        </Container>
      </ScaleFade>
    );
  }
}
