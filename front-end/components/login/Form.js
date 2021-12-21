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
    const [showPassword,setShowPass]=useState(false);
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
                        <FormControl isInvalid={errors.firstname}>
                            <FormLabel>NOM</FormLabel>
                            <Input
                                id="firstname"
                                type="text"
                                {...register('firstname', {
                                    required: 'Veuillez renseigner ce champ.',
                                })}/>
                            <FormErrorMessage>
                                {errors.firstname && errors.firstname.message}
                            </FormErrorMessage>
                        </FormControl>
                    </Box>
                    <Box>
                        <FormControl isInvalid={errors.lastname}>
                            <FormLabel>Prénom</FormLabel>
                            <Input
                                id="lastname"
                                type="text"
                                {...register('lastname', {
                                    required: 'Veuillez renseigner ce champ.',
                                })}/>
                            <FormErrorMessage>
                                {errors.lastname && errors.lastname.message}
                            </FormErrorMessage>
                        </FormControl>
                    </Box>
                </HStack>
            </Stack>
            <FormControl isInvalid={errors.email}>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input
                    id='email'
                    type='text'
                    placeholder='Entrez votre email...'
                    {...register('email', {
                        required: 'Veuillez renseigner ce champ.',
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Ceci n'est pas une adresse mail valide!"
                        }
                    })}
                />
                <FormErrorMessage>
                    {errors.email && errors.email.message}
                </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.phone}>
                <FormLabel>Téléphone</FormLabel>
                <Input
                    id='phone'
                    type="number"
                    placeholder='Entrez votre numéro de téléphone...'
                    {...register('phone', {
                        required: 'Veuillez renseigner ce champ.',
                        maxLength: { value: 12, message: 'Votre numéro doit faire 12 caractères maximum!' },
                    })}/>
                <FormErrorMessage>
                    {errors.phone && errors.phone.message}
                </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.address}>
                <FormLabel>Adresse</FormLabel>
                <Input
                    id='address'
                    type="text"
                    {...register('address', {
                        required: 'Veuillez renseigner ce champ.',
                })}/>
                <FormErrorMessage>
                    {errors.address && errors.address.message}
                </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.password}>
                <FormLabel>Mot de passe</FormLabel>
                <InputGroup>
                    <Input
                        id='password'
                        type={showPassword ? 'text' : 'password'}
                        {...register('password', {
                            required: 'Veuillez renseigner ce champ.',
                        })}/>
                    <InputRightElement h={'full'}>
                        <Button
                            variant={'ghost'}
                            onClick={() => setShowPass(!showPassword)}>
                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                    </InputRightElement>
                </InputGroup>
                <FormErrorMessage>
                    {errors.password && errors.password.message}
                </FormErrorMessage>
            </FormControl>
            <Button mt={4} variant={"good-food"} isLoading={isSubmitting} type='submit'>
                S'inscrire
            </Button>
        </form>
    )
}