import { Container, Flex, Heading, Image, LinkOverlay } from '@chakra-ui/react';
import React, { useState } from 'react';


export default function Auth() {
    const [selected,setSelected]=useState(true);
    return (
            <div className={"auth"}>
              <Container bg={"goodfood.white"} className={"container-auth"}>
                <Image src={"/goodfood-01.svg"}/>
                <Flex justifyContent={"space-between"} w={"100%"} px={"5rem"}>
                  <LinkOverlay className={"auth-button"} selected={selected}>Se connecter</LinkOverlay>
                  <LinkOverlay className={"auth-button"} selected={!selected}>S'inscrire</LinkOverlay>
                </Flex>
              </Container>
            </div>


    )
}
