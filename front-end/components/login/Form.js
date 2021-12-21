import { useForm } from 'react-hook-form'
import React, {useState} from 'react'
import {
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Button, Box, HStack, Stack, InputGroup, InputRightElement,
} from '@chakra-ui/react'
import {ViewIcon, ViewOffIcon} from "@chakra-ui/icons";

export default function Form() {
    const [showPassword,setShowPass]=useState();
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm()

    function onSubmit(values) {
        return new Promise((resolve) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                resolve()
            }, 3000)
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4}>
                <HStack>
                    <Box>
                        <FormControl id="firstname">
                            <FormLabel>NOM</FormLabel>
                            <Input type="text" />
                        </FormControl>
                    </Box>
                    <Box>
                        <FormControl id="lastname">
                            <FormLabel>Prénom</FormLabel>
                            <Input type="text" />
                        </FormControl>
                    </Box>
                </HStack>
            </Stack>
            <FormControl isInvalid={errors.name}>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input
                    id='email'
                    type='email'
                    placeholder='email'
                    {...register('name', {
                        required: 'This is required',
                        minLength: { value: 4, message: 'Minimum length should be 4' },
                    })}
                />
                <FormErrorMessage>
                    {errors.name && errors.name.message}
                </FormErrorMessage>
            </FormControl>
            <FormControl id="phone">
                <FormLabel>Téléphone</FormLabel>
                <Input type="number" />
            </FormControl>
            <FormControl id="address">
                <FormLabel>Adresse</FormLabel>
                <Input type="text" />
            </FormControl>
            <FormControl id="password">
                <FormLabel>Mot de passe</FormLabel>
                <InputGroup>
                    <Input type={showPassword ? 'text' : 'password'} />
                    <InputRightElement h={'full'}>
                        <Button
                            variant={'ghost'}
                            onClick={() =>
                                setShowPass((showPassword) => !showPassword)
                            }>
                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <Button mt={4} variant={"good-food"} isLoading={isSubmitting} type='submit'>
                S'inscrire
            </Button>
        </form>
    )
}