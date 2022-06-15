import React, { Component } from 'react';
import { Button, Container, Grid, GridItem, Input, ScaleFade, Text } from '@chakra-ui/react';
import {BsFacebook} from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { setCookie } from 'nookies';
import { instance } from '../../utils/axiosInstance';
import Router from 'next/router'





export default class Login extends Component{
  constructor(props) {
    super(props);
    this.state={
      username:"",
      password:"",
      error:undefined,
    }
  }
  componentDidMount() {
    document.addEventListener("keydown", ({code})=>code==="Enter"?this.onLogIn():null);
  };

  onLogIn = async () =>{
    try{
      let { data }=await instance.post("/login",{usernameEmail:this.state.username,password:this.state.password})
      if(data.token)
        setCookie(null, 'token', data.token,{ maxAge: 1000 * 60 * 60 * 24  });
      Router.reload(window.location.pathname)
    }
    catch(e){
      this.setState({error:e})
    }


  }

  handleChange = ({target}) => this.setState({[target.name]:target.value})

  render() {
    const {onLogIn,handleChange} = this;
    const {password,username,error} = this.state;
    return (
      <ScaleFade initialScale={0.9} in={true}>
        <Container textAlign={"center"} w={'80%'}>
          <Input
            placeholder="Email, Nom d'utilisateur"
            bg={'goodfood.white'}
            value={username}
            name={"username"}
            onChange={handleChange}
            mt={10} />
          <Input
            placeholder='Mot de passe'
            bg={'goodfood.white'}
            type={"password"}
            name={"password"}
            value={password}
            onChange={handleChange}
            mt={3}/>
          <Text align={'left'} cursor={"pointer"} mt={3} color={"goodfood.red"} fontSize={'sm'} onClick={this.props.reset}>{"Mot de passe oublié?"}</Text>
          {error?<Text align={'left'} mt={3} color={"goodfood.red"} fontSize={'sm'} >{"Erreur : mot de passe ou nom d'utilisateur incorrect !"}</Text>:null}
          <Button type={"submit"} bg={"goodfood.red"} color={"goodfood.white"} w={"100%"} borderRadius={"100"} mt={50} onClick={onLogIn}>
            {"Se connecter"}
          </Button>
          <Text fontWeight={"bold"} my={8}>Ou</Text>
          <Button bg={"goodfood.facebook"} color={"goodfood.white"} w={"100%"} borderRadius={"100"} >
              <BsFacebook/>
              <Text marginLeft={5} noOfLines={2}>{"Se connecter avec Facebook"}</Text>
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
