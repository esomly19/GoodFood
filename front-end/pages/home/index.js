import { Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { MdLocationOn, MdSearch } from 'react-icons/md';



export default function Home(props){

  return (
    <Flex background={"linear-gradient(#FF9970, #EB5162)"} width={"100%"} alignItems={"center"} flexDirection={"column"}>
      <Text width={"100%"} maxWidth={400} textAlign="end" color={"goodfood.white"} padding={5} cursor={"pointer"}>Passer >></Text>
      <Image src='/goodfood-apple.svg' alt='GoodFood' />
      <Heading size={"lg"} color={"goodfood.white"}>Bienvenue,</Heading>
      <Heading size={"lg"} color={"goodfood.white"}> Valérie!</Heading>
      <Text color={"goodfood.white"} maxWidth={300} textAlign={"center"}>{"Bienvenue sur la nouvelle application Goodfood. Vous pouvez désormais passer commande dans l’un de nos restaurants."}</Text>
      <Button bg={"goodfood.white"} paddingLeft={10} justifyContent={"start"} color={"goodfood.red"}  maxWidth={300} width={"100vw"} borderRadius={"100"} mt={"auto"}>
        <MdLocationOn/>
        <Text marginLeft={5} noOfLines={2}>{"Me localiser"}</Text>
      </Button>
      <Button bg={"goodfood.white"}  paddingLeft={10} justifyContent={"start"}  color={"goodfood.red"}  maxWidth={300} width={"100vw"} borderRadius={"100"} mb={20} mt={5}>
        <MdSearch/>
        <Text marginLeft={5} noOfLines={2}>{"Chercher un restaurant"}</Text>
      </Button>
    </Flex>
  )
}