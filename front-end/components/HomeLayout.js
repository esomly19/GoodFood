import { Flex } from '@chakra-ui/react';
import React from "react";


export default function HomeLayout(props) {
  return (
    <Flex h={'100vh'} w={'100vw'} flexDirection={"column"} bg={"linear-gradient(0.25turn,#FF9970, #EB5162)"}>
      {props.children}
    </Flex>

  )
}
