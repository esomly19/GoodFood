import React, { Component } from 'react';
import { Button, Container, Flex, Heading, Input, ScaleFade, Text } from '@chakra-ui/react';
import { BsFacebook, BsGoogle } from 'react-icons/bs';
import passwordEncrypt from '../../utils/passwordEncrypt';
import successAnimation from "../../lottie-json/success-animation.json"
import Lottie from "lottie-react";

export default class Register extends Component{
  constructor(props) {
    super(props);
    this.state={
      username:"",
      password:"",
      passwordConfirm:"",
      email:"",
      phone:"",
      status:""
    }
  }

  submit = async () =>{
    let {email,password,passwordConfirm,username,phone}=this.state;
    if(passwordConfirm!==password||!email||!password||!username||!phone)return;
    let encPassword=passwordEncrypt(password);
    try{
      let res=await fetch("http://localhost:5000/users",{
        method:'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email:email,password:encPassword,username:username,phone:phone})
      });
      this.setState({status:res.ok?"error":"ok"})
      console.log(res)
    }
    catch (e) {
      console.log(e)
    }

  }
  handleChange = ({target})=>{
    this.setState({[target.name]:target.value});
  }

  render() {
    const {submit,handleChange}=this;
    const {password,email,passwordConfirm,username,phone,status}=this.state;
    if(status==="ok")
      return (
        <ScaleFade initialScale={0.9} in={true}>
          <Container textAlign={"center"} w={'80%'} height={"100%"}>
            <Flex flexDirection={"row"} mt={5} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
              <Lottie animationData={successAnimation} />;
              <Button margin={10} bg={"goodfood.red"} color={"goodfood.white"} w={"80%"} borderRadius={"100"} onClick={this.props.login}>
                {"Se connecter"}
              </Button>
            </Flex>
          </Container>
        </ScaleFade>
      );
    else
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
          <Input
            placeholder="Email"
            bg={'goodfood.white'} mt={10}
            onChange={handleChange}
            value={email}
            type={"email"}
            name={"email"}/>
          <Input
            placeholder="Nom d'utilisateur"
            bg={'goodfood.white'} mt={3}
            onChange={handleChange}
            value={username}
            name={"username"}/>
          <Input
            placeholder="Numéro de téléphone"
            bg={'goodfood.white'} mt={3}
            onChange={handleChange}
            value={phone}
            type={"number"}
            name={"phone"}/>
          <Input
            placeholder="Mot de passe"
            bg={'goodfood.white'} mt={10}
            onChange={handleChange}
            value={password}
            type={"password"}
            name={"password"}/>
          <Input
            placeholder='Confirmer mot de passe'
            bg={'goodfood.white'} mt={3}
            onChange={handleChange}
            value={passwordConfirm}
            type={"password"}
            name={"passwordConfirm"}/>
          <Flex flexDirection={"row"} my={50} justifyContent={"space-between"} >
            <Flex width={"100%"}>
              <Button bg={"goodfood.red"} color={"goodfood.white"} w={"80%"} borderRadius={"100"} onClick={submit}>
                {"S'inscrire"}
              </Button>
            </Flex>
            <Text marginLeft={5}  color={'gray.500'}  fontSize={"xs"} cursor={"pointer"} onClick={this.props.login}>{"Déjà membre? Se connecter"}</Text>
          </Flex>
        </Container>
      </ScaleFade>
    );
  }
}
