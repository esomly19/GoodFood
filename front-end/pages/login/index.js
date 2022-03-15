import {Container, Heading} from "@chakra-ui/react";
import React from "react";
import FormLogin from "../../components/forms/FormLogin";

export default function Home() {
    return (

            <Container h="100%" variant={"white-round"} p={"2.5rem"}>
                <Heading textAlign={"center"} mb={5}>Se connecter</Heading>
                <FormLogin />
            </Container>

    )
}
