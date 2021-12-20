import React, { Component } from 'react';
import {
  Button,
  Center,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
} from '@chakra-ui/react';

const renseigner = 'Veuillez renseigner le champs ci-dessus';

export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      email: '',
      firstname: '',
      lastname: '',
      password: '',
      phone: '',
      address: '',
      empty: false,
      passwordError: false,
    };
  }

  handleSubmit = () => {
    let { email, firstname, lastname, password, phone, address } = this.state;
    if (!email || !firstname || !lastname || !password || !phone || !address)
      return this.setState({ empty: true });
    if (password.length < 8) return this.setState({ passwordError: true });
  };

  handleChange = ({ target: { id }, target }) => {
    this.setState({ [id]: target.value });
  };

  render() {
    let {
      show,
      email,
      firstname,
      lastname,
      password,
      phone,
      address,
      empty,
      passwordError,
    } = this.state;
    return (
      <>
        <Center>
          <Container alignContent centerContent variant={'white-round'}>
            <Heading>Inscription</Heading>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                borderColor={empty && !email ? 'red' : 'gray.200'}
                id="email"
                onChange={this.handleChange}
                value={email}
                type="email"
                placeholder="Entrez votre email..."
              />
              <FormHelperText textColor={'red'}>
                {empty && !email ? renseigner : ''}
              </FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="lastname">Nom</FormLabel>
              <Input
                borderColor={empty && !lastname ? 'red' : 'gray.200'}
                id="lastname"
                placeholder="Entrez votre nom..."
                onChange={this.handleChange}
                value={lastname}
              />
              <FormHelperText textColor={'red'}>
                {empty && !lastname ? renseigner : ''}
              </FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="firstname">Prénom</FormLabel>
              <Input
                borderColor={empty && !firstname ? 'red' : 'gray.200'}
                id="firstname"
                placeholder="Entrez votre prénom..."
                onChange={this.handleChange}
                value={firstname}
              />
              <FormHelperText textColor={'red'}>
                {empty && !firstname ? renseigner : ''}
              </FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Mot de passe</FormLabel>
              <Input
                borderColor={empty && !password ? 'red' : 'gray.200'}
                id={'password'}
                type={show ? 'text' : 'password'}
                placeholder="Entrez un mot de passe..."
                onChange={this.handleChange}
                value={password}
              />
              <Button
                h="1.75rem"
                size="sm"
                variant="good-food"
                onClick={() => this.setState({ show: !show })}
              >
                {show ? 'Hide' : 'Show'}
              </Button>
              <FormHelperText textColor={'red'}>
                {empty && !password ? renseigner : ''}
              </FormHelperText>
              <FormHelperText textColor={'red'}>
                {passwordError && password.length < 8
                  ? 'Le mot de passe doit faire plus de 8 caractères'
                  : ''}
              </FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="phone">Num. Téléphone</FormLabel>
              <Input
                borderColor={empty && !phone ? 'red' : 'gray.200'}
                id="phone"
                placeholder="Entrez votre numéro de téléphone..."
                onChange={this.handleChange}
                value={phone}
              />
              <FormHelperText textColor={'red'}>
                {empty && !phone ? renseigner : ''}
              </FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="address">Adresse</FormLabel>
              <Input
                borderColor={empty && !address ? 'red' : 'gray.200'}
                id="phone"
                placeholder="Entrez votre adresse..."
                onChange={this.handleChange}
                value={address}
              />
              <FormHelperText textColor={'red'}>
                {empty && !address ? renseigner : ''}
              </FormHelperText>
            </FormControl>
            <Button mt={4} variant="good-food" onClick={this.handleSubmit}>
              S'inscrire
            </Button>
          </Container>
        </Center>
      </>
    );
  }
}
