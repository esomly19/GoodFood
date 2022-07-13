import HomeLayout from "../../components/HomeLayout";
import {Container, Flex, Image, Text} from "@chakra-ui/react";
import {instancePlat, instanceRestaurant} from "../../utils/axiosInstance";
import Commande from "../../components/commande/Commande";
export default function Restaurant(props){
    const {restaurant,plats}=props;
    return(
        <HomeLayout>
            <Flex height={"10vh"} justifyContent={"center"} width={"100%"}>
                <Image src={"/goodfood-apple.svg"} alt={"logo"}/>
            </Flex>
            <Container h={"90vh"} w={"100vw"} className={"container-auth"} borderTopRadius={10} >
                {
                    restaurant?<Commande restaurant={restaurant} plats={plats}/>:<Text align={"center"}>{"Ce restaurant n'est pas disponible pour le moment!"}</Text>
                }
            </Container>
        </HomeLayout>);

}
export async function getServerSideProps(context) {
    let {id}=context.params;
    let restaurant,plats;
    if(id) {
        try {
            let {data} = await instanceRestaurant.post("/id", {id: parseInt(id)});
            restaurant=data;
            if(restaurant.id){
                let {data}=await instancePlat.post("/id",{restaurant_id:restaurant.id});
                plats=data;
            }
        }
        catch (e){
            console.log(e)
        }

    }

    return {
        props: {restaurant,plats}, // will be passed to the page component as props
    }
}
