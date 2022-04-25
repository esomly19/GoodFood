import { Container, Flex, Image, ScaleFade, Spacer, Text } from '@chakra-ui/react';
import React, { Component } from 'react';
import Register from '../../components/auth/Register';
import Login from '../../components/auth/Login';
import PasswordReset from '../../components/auth/PasswordReset';

export const STATUS = {
  login:0,
  register:1,
  reset:2
}

export default class Auth extends Component{
  constructor(props) {
    super(props);
    this.state={
      selected:STATUS.login
    }
  }

  handleSelected = (status)=>{
    this.setState({selected:status});
  }

  renderSelected = () => {
    switch(this.state.selected){
      case STATUS.login:
        return <Login reset={this.handleSelected.bind(this,STATUS.reset)}/>;
      case STATUS.register:
        return <Register/>;
      case STATUS.reset:
        return <PasswordReset login={this.handleSelected.bind(this,STATUS.login)}/>
      default:
        return null;
    }
  }

  render() {
    const {selected}=this.state;
    return (
      <div className={"auth"}>
          <Container bg={"goodfood.grey"} className={"container-auth"} borderBottomRadius={10}>
            <div className={"container-auth-header"}>
              <Image src={"/goodfood-01.svg"}/>
              <Flex w={"100%"} justifyContent={"center"}>
                <Flex justifyContent={"space-between"} w={"75%"}>
                  <Text className={"auth-button "+((selected===STATUS.login||selected===STATUS.reset)&&"selected")} onClick={this.handleSelected.bind(this,STATUS.login)}>{"Se connecter"}</Text>
                  <Spacer />
                  <Text className={"auth-button "+(selected===STATUS.register&&"selected")} onClick={this.handleSelected.bind(this,STATUS.register)}>{"S'inscrire"}</Text>
                </Flex>
              </Flex>
            </div>
            {this.renderSelected()}
          </Container>



      </div>

    )
  }


}
