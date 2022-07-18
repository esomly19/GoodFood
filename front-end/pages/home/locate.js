import HomeLayout from '../../components/HomeLayout';
import { Button, Container, Flex, Heading, Image, Text } from '@chakra-ui/react';
import GoogleMapReact from 'google-map-react';
import { MdDinnerDining } from 'react-icons/md';
import Router from 'next/router';
import React, {useState} from "react";
import {instanceRestaurant} from "../../utils/axiosInstance";

export default function Locate(props){
  const [restaurant,setRestaurant]=useState(null);

  return(
    <HomeLayout>
      <Flex height={"10vh"} justifyContent={"center"} width={"100%"}>
        <Image src={"/goodfood-apple.svg"} alt={"logo"}/>
      </Flex>
      <Container h={"90vh"} bg={"goodfood.grey"} className={"container-auth"} borderTopRadius={10}>
        <Flex position={"relative"} height={"60vh"} width={"100%"} borderTopRadius={10} overflow={"hidden"}>
          <Button position={"absolute"} zIndex={"500"}top={5} left={5} onClick={()=>Router.push("/home/search")}>{"< Nos restaurants"}</Button>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={props.restaurants[0]?{...props.restaurants[0]}:null}
            defaultZoom={11}>
            {props.restaurants?.map((restaurant,index)=>{
              return <Image key={index} {...restaurant} onClick={()=>setRestaurant(restaurant)} style={greatPlaceStyle} src={"/goodfood-apple.svg"} alt={"logo"}/>;
            })
            }
          </GoogleMapReact>
        </Flex>
        {
          restaurant?
              <>
                <Flex justifyContent={"center"}padding={10}>
                  <Flex marginRight={25} justifyContent={"center"} alignItems={"center"}>
                    <MdDinnerDining size={25}/>
                  </Flex>
                  <Flex flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                    <Heading size={"xs"}>{restaurant.ville+", "+restaurant.pays}</Heading>
                    <Text>{restaurant.adresse}</Text>
                    <Text>{restaurant.tel}</Text>
                  </Flex>
                </Flex>
                <Flex justifyContent={"center"}>
                  <Button bg={"goodfood.red"} color={"goodfood.white"} _hover={{color:"goodfood.blue"}} onClick={()=>Router.push("/commande/"+restaurant.id)}>{"Passer une commande"}</Button>
                </Flex>
              </>
            :null
        }
      </Container>
    </HomeLayout>
  );
}

export async function getServerSideProps(context) {
  let {data}=await instanceRestaurant.get("/");

  return {
    props: {restaurants:data}, // will be passed to the page component as props
  }
}
const K_WIDTH = 40;
const K_HEIGHT = 40;

const greatPlaceStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,
  cursor:"pointer",

  textAlign: 'center',

  padding: 4
};
