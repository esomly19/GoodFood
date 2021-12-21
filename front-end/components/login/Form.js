import { useForm } from 'react-hook-form'
import React from 'react'
import {
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Button, Box, HStack, Stack,
} from '@chakra-ui/react'

export default function Form() {
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
                        <FormControl id="firstName" isRequired>
                            <FormLabel>First Name</FormLabel>
                            <Input type="text" />
                        </FormControl>
                    </Box>
                    <Box>
                        <FormControl id="lastName">
                            <FormLabel>Last Name</FormLabel>
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
            <Button mt={4} variant={"good-food"} isLoading={isSubmitting} type='submit'>
                Submit
            </Button>
        </form>
    )
}