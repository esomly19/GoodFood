import HomeLayout from '../../components/HomeLayout';
import { Button, Container, Flex, Heading, Image, Text } from '@chakra-ui/react';
import GoogleMapReact from 'google-map-react';
import { MdDinnerDining } from 'react-icons/md';
import Router from 'next/router';
import {BiRestaurant} from "react-icons/bi";
import {useEffect, useState} from "react";
import {instanceRestaurant} from "../../utils/axiosInstance";

const Marker = ({ onClick }) => <BiRestaurant size={25} color={"red"} onClick={onClick} style={{cursor:"pointer"}}/>;

const GEOCODE = {
  Nancy:{
    lat:48.6937223,
    lng:6.1834097
  },
  Paris:{
    lat:48.8534951,
    lng:2.3483915
  },
  Bordeaux:{
    lat:44.841225,
    lng:-0.5800364
  },
  Nantes:{
    lat:47.2186371,
    lng:-1.5541362
  },
  Strasbourg:{
    lat:48.584614,
    lng:7.7507127
  },
  Lille:{
    lat:50.6365654,
    lng:3.0635282
  }
}

export default function locate(props){
  const [restaurants,setRestaurants]=useState([]);
  const [restaurant,setRestaurant]=useState(null);

  useEffect(async ()=>{
    let {data}=await instanceRestaurant.get("/");
    setRestaurants(data);
  },[])

  return(
    <HomeLayout>
      <Flex height={"10vh"} justifyContent={"center"} width={"100%"}>
        <Image src={"/goodfood-apple.svg"}/>
      </Flex>
      <Container h={"90vh"} bg={"goodfood.grey"} className={"container-auth"} borderTopRadius={10}>
        <Flex position={"relative"} height={"60vh"} width={"100%"} borderTopRadius={10} overflow={"hidden"}>
          <Button position={"absolute"} zIndex={"500"}top={5} left={5} onClick={()=>Router.push("/home/search")}>{"< Nos restaurants"}</Button>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={GEOCODE.Nancy}
            defaultZoom={11}>
            {restaurants.map((restaurant,index)=>{
              return <Marker key={index} {...GEOCODE[restaurant.ville]} onClick={()=>setRestaurant(restaurant)}/>;
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
