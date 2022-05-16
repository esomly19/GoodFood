import HomeLayout from '../../components/HomeLayout';
import {
  Container,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useState } from 'react';
import { GoLocation } from 'react-icons/go';
import { FaSearchLocation } from 'react-icons/fa';
import Router from 'next/router';


export default function search(props){
  const [restaurants,setRestaurants]=useState([]);


  const renderRestaurants = (restaurant,index) =>{
    return(
      <Flex justifyContent={"left"}padding={10} key={index}>
        <Flex marginRight={25} justifyContent={"center"} alignItems={"center"}>
          <GoLocation size={25}/>
        </Flex>
        <Flex flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
          <Heading size={"xs"}>{restaurant.ville+", "+restaurant.pays}</Heading>
          <Text>{restaurant.adresse}</Text>
          <Text>{restaurant.tel}</Text>
        </Flex>
      </Flex>
    );
  }
  return(
    <HomeLayout>
      <Flex height={"10vh"} justifyContent={"center"} width={"100%"}>
        <Image src={"/goodfood-apple.svg"}/>
      </Flex>
      <Container h={"90vh"} bg={"goodfood.grey"} className={"container-auth"} borderTopRadius={10}>
       <Flex padding={10} flexDirection={"column"} maxHeight={"100%"}>
         <Heading as='h4' size='md'>
           Nos Restaurants
         </Heading>
         <InputGroup marginTop={10}>
           <Input placeholder='Chercher un restaurant...' />
           <InputRightElement children={<AiOutlineSearch style={{cursor:"pointer"}}/>} />
         </InputGroup>
         <Flex height={"100%"} flexDirection={"column"} overflowY={"scroll"} marginTop={10}>
           {
             restaurants.map(renderRestaurants)
           }
           <Flex justifyContent={"left"} padding={10} cursor={"pointer"} onClick={()=>Router.push("/home/locate")}>
             <Flex marginRight={25} justifyContent={"center"} alignItems={"center"}>
               <FaSearchLocation size={25}/>
             </Flex>
             <Flex flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
               <Heading size={"xs"}>Ouvrir la carte</Heading>
             </Flex>
           </Flex>

         </Flex>
       </Flex>
      </Container>
    </HomeLayout>

  );

}