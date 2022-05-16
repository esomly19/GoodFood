import { Flex, ScaleFade } from '@chakra-ui/react';
import React from "react";


export default function HomeLayout(props) {
  return (
    <Flex h={'100vh'} w={'100vw'} flexDirection={"column"} bg={"linear-gradient(0.25turn,#FF9970, #EB5162)"}>
      <ScaleFade initialScale={0.9} in={true}>
        {props.children}
      </ScaleFade>
    </Flex>

  )
}
