import HomeLayout from '../../components/HomeLayout';

import {
    Button,
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
import {useEffect, useState} from 'react';
import { GoLocation } from 'react-icons/go';
import { FaSearchLocation } from 'react-icons/fa';
import Router from 'next/router';
import {instanceRestaurant, instanceUsers} from "../../utils/axiosInstance";
import jwt from "jwt-decode";


export default function Search(props){
  const {restaurants}=props;
  const [restaurant,setRestaurant]=useState(null);
  const [search,setSearch] = useState("");

  const renderRestaurants = (resto,index) =>{
    if(!resto.ville.toUpperCase().includes(search.toUpperCase()))return null;
    return(
      <Flex justifyContent={"left"} margin={5} borderRadius={10} padding={10} key={index} cursor={"pointer"} onClick={()=>setRestaurant(resto)} bg={restaurant?.id===resto.id?"linear-gradient(0.25turn,#FF9970, #EB5162)":null}  color={restaurant?.id===resto.id?"white":null}>
        <Flex marginRight={25} justifyContent={"center"} alignItems={"center"}>
          <GoLocation size={25}/>
        </Flex>
        <Flex flexDirection={"column"} >
          <Heading justifyContent={"start"}size={"xs"}>{resto.ville+", "+resto.pays}</Heading>
          <Text textAlign={"start"}>{resto.adresse}</Text>
          <Text textAlign={"start"}>{resto.tel}</Text>
        </Flex>
      </Flex>
    );
  }
  return(
    <HomeLayout>
      <Flex height={"10vh"} justifyContent={"center"} width={"100%"}>
        <Image src={"/goodfood-apple.svg"} alt={"logo"}/>
      </Flex>
      <Container h={"90vh"} bg={"goodfood.grey"} className={"container-auth"} borderTopRadius={10}>
       <Flex padding={10} flexDirection={"column"} maxHeight={"100%"}>
         <Heading as='h4' size='md'>
           Nos Restaurants
         </Heading>
         <InputGroup marginTop={10}>
           <Input placeholder='Chercher un restaurant...' value={search} onChange={({target})=>setSearch(target.value)} />
             <InputRightElement><AiOutlineSearch style={{cursor:"pointer"}}/></InputRightElement>
         </InputGroup>
         <Flex height={"100%"} flexDirection={"column"} overflowY={"scroll"} marginTop={10}  borderColor={"goodfood.blue"} borderWidth={1} borderRadius={10}>
           {
             restaurants.map(renderRestaurants)
           }
         </Flex>
         <Flex justifyContent={"left"} padding={10} cursor={"pointer"} onClick={()=>Router.push("/home/locate")}>
               <Flex marginRight={25} justifyContent={"center"} alignItems={"center"}>
                   <FaSearchLocation size={25}/>
               </Flex>
               <Flex flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                   <Heading size={"xs"}>Ouvrir la carte</Heading>
               </Flex>
           </Flex>
         <Flex justifyContent={"center"}>
           <Button bg={"goodfood.red"} disabled={!restaurant} color={"goodfood.white"} _hover={{color:"goodfood.blue"}} onClick={()=>Router.push("/commande/"+restaurant.id)}>{"Passer une commande"}</Button>
         </Flex>
       </Flex>
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
