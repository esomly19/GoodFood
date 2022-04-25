import React, { Component } from 'react';
import {
  Button,
  Container,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  ScaleFade,
  Stack, Text,
} from '@chakra-ui/react';
import { IoIosArrowBack } from 'react-icons/io';
import { FiMail } from 'react-icons/fi';
import { AiOutlineArrowRight } from 'react-icons/ai';

export default class PasswordReset extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScaleFade initialScale={0.9} in={true}>
        <Container textAlign={"center"} w={'80%'} paddingTop={25}>
          <IoIosArrowBack size={30} style={{cursor:"pointer"}} onClick={this.props.login}/>
          <Heading width={"60%"} textAlign={"left"} color={"goodfood.red"} paddingTop={25}>{"Mot de passe oublié?"}</Heading>
          <Stack spacing={4} marginY={50}>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                color='gray.300'
                fontSize='1.2em'
                children={<FiMail/>}
              />
              <Input type={"email"} placeholder='Email' />
            </InputGroup>
          </Stack>
          <Text width={"75%"} textAlign="left" fontSize='xs'>
            {"* Nous vous enverrons un mail contenant un code permettant de réinitialiser votre mot de passe dès que possible."}
          </Text>
          <Flex flexDirection={"row"} my={50} justifyContent={"flex-end"} >
            <Button bg={"goodfood.red"} color={"goodfood.white"} borderRadius={"100"} >
              <AiOutlineArrowRight/>
            </Button>
          </Flex>
        </Container>
      </ScaleFade>
    );
  }
}
