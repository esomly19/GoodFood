import { Flex, ScaleFade } from '@chakra-ui/react';
import React from "react";
import Head from 'next/head'


export default function HomeLayout(props) {
  return (
    <Flex h={'100vh'} w={'100vw'} flexDirection={"column"} bg={"linear-gradient(0.25turn,#FF9970, #EB5162)"}>
        <Head>
            <title>GoodFood</title>
        </Head>
      <ScaleFade initialScale={0.9} in={true}>
        {props.children}
      </ScaleFade>
    </Flex>

  )
}
