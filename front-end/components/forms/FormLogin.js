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
import passwordEncrypt from "../../utils/passwordEncrypt";

export default function FormLogin() {
    const [showPassword,setShowPass]=useState(false);
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm()

    function onSubmit(values) {
        values.password=passwordEncrypt(values.password);
        console.log(values)
        return new Promise((resolve) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                resolve()
            }, 3000)
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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
            <FormControl isInvalid={errors.password}>
                <FormLabel>Mot de passe</FormLabel>
                <InputGroup>
                    <Input
                        id='password'
                        type={showPassword ? 'text' : 'password'}
                        placeholder='Entrez un mot de passe...'
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
                {"S'inscrire"}
            </Button>
        </form>
    )
}