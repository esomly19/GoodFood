import {Container, Flex, Image, Text } from '@chakra-ui/react';
import React, { Component, useState } from 'react';


export default class Auth extends Component{
  constructor(props) {
    super(props);
    this.state={
      selected:true
    }
  }
  handleSelected = (status)=>{
    console.log(status)
    this.setState({selected:status});
  }

  render() {
    const {selected}=this.state;
    return (
      <div className={"auth"}>
        <Container bg={"goodfood.white"} className={"container-auth"}>
          <Image src={"/goodfood-01.svg"}/>
          <Flex justifyContent={"space-between"} w={"100%"} px={"5rem"}>
            <Text className={"auth-button "+(selected?"selected":"")} onClick={this.handleSelected.bind(this,true)}>Se connecter</Text>
            <Text className={"auth-button "+(selected?"":"selected")} onClick={this.handleSelected.bind(this,false)} >S'inscrire</Text>
          </Flex>
        </Container>
      </div>

    )
  }


}
