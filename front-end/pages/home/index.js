import { Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React, {useEffect, useState} from 'react';
import { MdLocationOn, MdSearch } from 'react-icons/md';
import Router from 'next/router';
import {instanceUsers} from "../../utils/axiosInstance";
import {parseCookies} from "nookies";
import jwt from "jwt-decode";
import {capitalizeFirstLetter} from "../../utils/stringUtils";

export default function home(props){
    const [user,setUser]=useState(null);
    useEffect(() => {
        // declare the data fetching function
        const fetchData = async () => {
            const cookies = parseCookies()
            let id= jwt(cookies.token).id;
            const {data} = await instanceUsers.post("/id",{id});
            setUser(data);
        }
        fetchData().catch(console.error);
    }, [])
  return (
    <Flex background={"linear-gradient(#FF9970, #EB5162)"} width={"100%"} alignItems={"center"} flexDirection={"column"}>
      <Image marginY={25} src='/goodfood-apple.svg' alt='GoodFood' />
      <Heading size={"lg"} color={"goodfood.white"}>Bienvenue,</Heading>
      <Heading size={"lg"} color={"goodfood.white"}> {user?capitalizeFirstLetter(user.username):""}!</Heading>
      <Text color={"goodfood.white"} maxWidth={300} textAlign={"center"}>{"Bienvenue sur la nouvelle application Goodfood. Vous pouvez désormais passer commande dans l’un de nos restaurants."}</Text>
      <Button
        bg={"goodfood.white"}
        paddingLeft={10}
        justifyContent={"start"}
        color={"goodfood.red"}
        maxWidth={300}
        width={"100vw"}
        borderRadius={"100"}
        mt={"auto"}
        onClick={()=>Router.push("/home/locate")}>
        <MdLocationOn/>
        <Text marginLeft={5} noOfLines={2}>{"Me localiser"}</Text>
      </Button>
      <Button
        bg={"goodfood.white"}
        paddingLeft={10}
        justifyContent={"start"}
        color={"goodfood.red"}
        maxWidth={300}
        width={"100vw"}
        borderRadius={"100"}
        mb={20}
        mt={5}
        onClick={()=>Router.push("/home/search")}>
        <MdSearch/>
        <Text marginLeft={5} noOfLines={2}>{"Chercher un restaurant"}</Text>
      </Button>
    </Flex>
  )
}
