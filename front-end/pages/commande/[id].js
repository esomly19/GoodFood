import HomeLayout from "../../components/HomeLayout";
import {Container, Flex, Image, Text} from "@chakra-ui/react";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {instanceRestaurant} from "../../utils/axiosInstance";

export default function restaurant(){
    const router = useRouter()
    const { id } = router.query;
    const [restaurant,setRestaurant]=useState(null);

    useEffect(async ()=>{
        if(!id)return;
        let {data}=await instanceRestaurant.post("/id",{id:parseInt(id)});
        setRestaurant(data);
    },[id]);

    if(!restaurant)
        return(
            <HomeLayout>
                <Flex height={"10vh"} justifyContent={"center"} width={"100%"}>
                    <Image src={"/goodfood-apple.svg"}/>
                </Flex>
                <Container h={"90vh"} w={"90vw"} bg={"goodfood.grey"} className={"container-auth"} borderTopRadius={10} >
                    <Text align={"center"}>Ce restaurant n'est pas disponible pour le moment!</Text>.
                </Container>
            </HomeLayout>);
    else
        return(
            <HomeLayout>
                <Flex height={"10vh"} justifyContent={"center"} width={"100%"}>
                    <Image src={"/goodfood-apple.svg"}/>
                </Flex>
                <Container h={"90vh"} w={"90vw"} bg={"goodfood.grey"} className={"container-auth"} borderTopRadius={10}>
                    {restaurant.ville}
                </Container>
            </HomeLayout>);
}
