import { Container, Flex, Image, ScaleFade, Spacer, Text } from '@chakra-ui/react';
import React, { Component } from 'react';
import PasswordReset from '../../components/auth/PasswordReset';


export default class Reset extends Component{
  constructor(props) {
    super(props);
    this.state={

    }
  }

  render() {
    return (
      <div className={"auth"}>

        <Container bg={"goodfood.grey"} className={"container-auth"} borderBottomRadius={10}>
          <div className={"container-auth-header"}>
            <Image src={"/goodfood-01.svg"}/>
          </div>
          <PasswordReset/>
        </Container>



      </div>

    )
  }


}
