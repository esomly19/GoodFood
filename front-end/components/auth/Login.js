import { Component } from 'react';
import { Button, Container, Input, Text } from '@chakra-ui/react';

export default class Login extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container textAlign={"center"}w={'80%'}>
        <Input placeholder="Email, Nom d'utilisateur" bg={'goodfood.white'} mt={10} />
        <Input placeholder='Mot de passe' bg={'goodfood.white'} type={"password"} mt={3}/>
        <Text align={'left'} mt={3} color={"goodfood.red"} fontSize={'sm'}>Mot de passe oublié?</Text>
        <Button bg={"goodfood.red"} color={"goodfood.white"} w={"100%"} borderRadius={"100"} mt={50}>
          Se connecter
        </Button>
      </Container>
    );
  }
}
