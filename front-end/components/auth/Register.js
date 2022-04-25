import React, { Component } from 'react';
import { Button, Container, Flex, Heading, Input, ScaleFade, Text } from '@chakra-ui/react';
import { BsFacebook, BsGoogle } from 'react-icons/bs';

export default class Register extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScaleFade initialScale={0.9} in={true}>
        <Container textAlign={"center"} w={'80%'}>
          <Flex flexDirection={"row"} mt={5} justifyContent={"space-between"}>
            <Heading textAlign={"left"} color={"goodfood.red"}>{"S'inscrire"}</Heading>
            <Flex>
              <Button marginRight={5} colorScheme='black' variant='outline'><BsFacebook/></Button>
              <Button colorScheme='black' variant='outline'><BsGoogle/></Button>
            </Flex>
          </Flex>
          <Input placeholder="Email" bg={'goodfood.white'} mt={10} />
          <Input placeholder="Nom d'utilisateur" bg={'goodfood.white'} type={"password"} mt={3}/>
          <Input placeholder="Mot de passe" bg={'goodfood.white'} mt={10} />
          <Input placeholder='Confirmer mot de passe' bg={'goodfood.white'} type={"password"} mt={3}/>
          <Flex flexDirection={"row"} my={50} justifyContent={"space-between"} >
            <Flex width={"100%"}>
              <Button bg={"goodfood.red"} color={"goodfood.white"} w={"80%"} borderRadius={"100"} >
                {"S'inscrire"}
              </Button>
            </Flex>
            <Text marginLeft={5}>{"Déjà membre?\nSe connecter"}</Text>
          </Flex>
        </Container>
      </ScaleFade>
    );
  }
}
