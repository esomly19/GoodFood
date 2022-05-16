import HomeLayout from '../../components/HomeLayout';
import { Button, Container, Flex, Heading, Image, Text } from '@chakra-ui/react';
import GoogleMapReact from 'google-map-react';
import { MdDinnerDining } from 'react-icons/md';
import Router from 'next/router';

export default function locate(props){
  let goodfood = {
    ville:"Nancy",
    pays:"FRANCE",
    adresse:"50 rue du moulin",
    tel:"0650408090"
  }


  const defaultProps = {
    center: {
      lat: 48.697287126507,
      lng: 6.182364838715206
    },
    zoom: 11
  };
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
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}>
          </GoogleMapReact>
        </Flex>
        <Flex justifyContent={"center"}padding={10}>
          <Flex marginRight={25} justifyContent={"center"} alignItems={"center"}>
            <MdDinnerDining size={25}/>
          </Flex>
          <Flex flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
            <Heading size={"xs"}>{goodfood.ville+", "+goodfood.pays}</Heading>
            <Text>{goodfood.adresse}</Text>
            <Text>{goodfood.tel}</Text>
          </Flex>
        </Flex>
        <Flex justifyContent={"center"}>
          <Button bg={"goodfood.red"} color={"goodfood.white"}>{"Passer une commande"}</Button>
        </Flex>
      </Container>
    </HomeLayout>
  );
}