import React, {Component} from "react";
import {
    Button,
    Center,
    Container,
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
} from "@chakra-ui/react";

const renseigner="Veuillez renseigner le champs ci-dessus";

export default class Auth extends Component{
    constructor(props) {
        super(props);
        this.state={
            show:false,
            email:"",
            firstname:"",
            lastname:"",
            password:"",
            empty:false,
            passwordError:false
        }
    }

    handleSubmit = () => {
        let {email,firstname,lastname,password}=this.state;
        if(!email||!firstname||!lastname||!password) return this.setState({empty:true});
        if(password.length<8) return this.setState({passwordError:true});
    }

    handleChange = ({target:{id},target}) =>{this.setState({[id]:target.value})}


    render(){
        let {show,email,firstname,lastname,password,empty,passwordError}=this.state;
        return(
            <>
                <Center>
                    <Container alignContent centerContent>
                        <FormControl>
                            <FormLabel htmlFor='email'>Email</FormLabel>
                            <Input
                                borderColor={(empty&&!email)?"red":"gray.200"}
                                id='email'
                                onChange={this.handleChange}
                                value={email}
                                type='email'
                                placeholder='Entrez votre email...'/>
                            <FormHelperText textColor={"red"}>{(empty && !email) ? renseigner : ""}</FormHelperText>
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor='lastname'>Nom</FormLabel>
                            <Input
                                borderColor={(empty&&!lastname)?"red":"gray.200"}
                                id='lastname'
                                placeholder='Entrez votre nom...'
                                onChange={this.handleChange}
                                value={lastname}/>
                            <FormHelperText textColor={"red"}>{(empty && !lastname) ? renseigner : ""}</FormHelperText>
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor='firstname'>Prénom</FormLabel>
                            <Input
                                borderColor={(empty&&!firstname)?"red":"gray.200"}
                                id='firstname'
                                placeholder='Entrez votre prénom...'
                                onChange={this.handleChange}
                                value={firstname}/>
                            <FormHelperText textColor={"red"}>{(empty && !firstname) ? renseigner : ""}</FormHelperText>
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor='password'>Mot de passe</FormLabel>
                            <Input
                                borderColor={(empty&&!password)?"red":"gray.200"}
                                id={"password"}
                                type={show ? 'text' : 'password'}
                                placeholder='Entrez un mot de passe...'
                                onChange={this.handleChange}
                                value={password}/>
                            <Button h='1.75rem' size='sm' onClick={()=>this.setState({show:!show})}>
                                {show ? 'Hide' : 'Show'}
                            </Button>
                            <FormHelperText textColor={"red"}>{(empty && !password) ? renseigner : ""}</FormHelperText>
                            <FormHelperText textColor={"red"}>{(passwordError && password.length<8) ? "Le mot de passe doit faire plus de 8 caractères" : ""}</FormHelperText>
                        </FormControl>
                        <Button mt={4} colorScheme='teal' variant='solid' onClick={this.handleSubmit}>
                            Button
                        </Button>
                    </Container>
                </Center>
            </>
        );
    }

}