import React from 'react';
import { Button, Center, Flex, Heading, Text} from "@chakra-ui/react";
import {instanceCommandes} from "../../utils/axiosInstance";
import {destroyCookie, parseCookies, setCookie} from "nookies";
import jwt from "jwt-decode";
import Router from "next/router";

export default class Profil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commandes:[]
        };
    }

    async componentDidMount() {
        const cookies = parseCookies()
        let id_client= jwt(cookies.token).id;
        let {data} = await instanceCommandes.post("/user", {id_client})
        this.setState({commandes:data});
    }

    deconnexion= () =>{
        setCookie(null,'token','value',{maxAge:0})
        console.log("slt")
        window.location.reload(false);
    }

    renderCommande = (commande,key) =>{
        const {etat,id,prix,horraire}=commande;
        let color = etat==="commander"?"#FF724C":etat==="livrer"?"green":etat==="annuler"?"red":"white";
        let status = etat==="commander"?"Commandée":etat==="livrer"?"Livrée":etat==="annuler"?"Annulée":"";
        return (
                <Flex key={key} m={5} borderWidth={1} borderColor={"goodfood.blue"} borderRadius={20} p={2} flexDirection={"row"} fontSize={"sm"}>
                    <Flex flex={3}  style={{fontWeight: "bold"}} justifyContent={"space-between"} flexDirection={"column"}>
                        <Text>Commande: #{ ('000000'+id).slice(-6)}</Text>
                        <Text color={"goodfood.red"}>{parseFloat(prix).toFixed(2)}€</Text>
                    </Flex>
                    <Flex flex={3} justifyContent={"space-between"} flexDirection={"column"} alignItems={"flex-end"}>
                        <Text as={"i"}>{horraire}</Text>
                        <Text>Etat: <span style={{color:color}}>{status}</span></Text>
                    </Flex>
                </Flex>
        );
    }

    render() {
        const {commandes}=this.state;
        return(
            <Flex h={"100%"} flexDirection={"column"} bg={"goodfood.grey"} borderTopRadius={20} overflow={"scroll"}>
                <Flex  h={"99%"} flexDirection={"column"} p={5}>
                    <Heading>Profil</Heading>
                    <Heading size={"lg"} mt={2}>Mes commandes</Heading>
                    <Flex borderRadius={20} bg={"goodfood.white"} h={"50%"} marginY={4} overflowY={"scroll"}
                          className={"scnone"}
                          style={{filter:"drop-shadow(0px 0px 5px #C0C0C0"}} flexDirection={"column"}>
                        {commandes.map(this.renderCommande)}
                    </Flex>
                    <Center flexDirection="column">
                        <Button
                            bg={"goodfood.white"}
                            color={"goodfood.red"}
                            minWidth={200}
                            borderRadius={"100"}
                            marginY={5}
                            onClick={()=>Router.push("/home")}>
                            Choix des restaurant
                        </Button>
                        <Button
                            bg={"goodfood.white"}
                            color={"goodfood.red"}
                            minWidth={200}
                            borderRadius={"100"}
                            marginY={5}>
                            Paramètres
                        </Button>
                        <Button
                            bg={"goodfood.white"}
                            color={"goodfood.red"}
                            minWidth={200}
                            borderRadius={"100"}
                            marginY={5}>
                            Compte
                        </Button>
                        <Button
                            bg={"goodfood.red"}
                            color={"goodfood.white"}
                            minWidth={200}
                            borderRadius={"100"}
                            marginY={5}
                            onClick={this.deconnexion}>
                            {"Déconnexion"}
                        </Button>
                    </Center>
                </Flex>
            </Flex>
        );
    }
}
