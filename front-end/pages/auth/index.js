import { Container, Flex, Image, Spacer, Text } from '@chakra-ui/react';
import React, { Component } from 'react';
import Register from '../../components/auth/Register';
import Login from '../../components/auth/Login';


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

          <Container bg={"goodfood.grey"} className={"container-auth"} >
            <div className={"container-auth-header"}>
              <Image src={"/goodfood-01.svg"}/>
              <Flex w={"100%"} justifyContent={"center"}>
                <Flex justifyContent={"space-between"} w={"75%"}>
                  <Text className={"auth-button "+(selected?"selected":"")} onClick={this.handleSelected.bind(this,true)}>Se connecter</Text>
                  <Spacer />
                  <Text className={"auth-button "+(selected?"":"selected")} onClick={this.handleSelected.bind(this,false)} >S'inscrire</Text>
                </Flex>
              </Flex>
            </div>
            {selected?<Login/>:<Register/>}
          </Container>



      </div>

    )
  }


}
