import {Container, Flex, Heading} from "@chakra-ui/react";
import React from "react";
import FormLogin from "../../components/forms/FormLogin";

export default function Home() {
    return (
        <Flex alignItems={"center"} justifyContent={"center"} w={"100%"}>
            <Container h={"fit-content"} variant={"white-round"} mt={5}>
                <Heading textAlign={"center"} mb={5}>Se connecter</Heading>
                <FormLogin />
            </Container>
        </Flex>
    )
}
