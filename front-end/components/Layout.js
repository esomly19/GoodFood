import { Flex } from '@chakra-ui/react';
import React from "react";


export default function Layout(props) {
  return (
    <Flex h={'100vh'} w={'100vw'} bg={"goodfood.grey"}>
        {props.children}
    </Flex>

  )
}
