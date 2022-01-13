import { Box, chakra, Container, Flex, Stack, Text, useColorModeValue, VisuallyHidden } from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import Image from 'next/image';

export default function SmallWithLogoLeft() {
    return (
            <Flex
                px={"4rem"}
                as={Stack}
                py={2}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                bg={useColorModeValue('gray.50', 'gray.900')}
                color={useColorModeValue('gray.700', 'gray.200')}
                display={"flex"}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <Image src={"/goodfood-01.svg"} alt="Good Food Logo" width={120} height={50}/>
                <div>
                    <Text textAlign={"center"}>{"© 2022 GoodFood - Tous Droits Réservés"}</Text>
                    <Text textAlign={"center"}>{"🚀 Propulsé par MetzSoft"}</Text>
                </div>
                <Stack direction={'row'} spacing={6}>
                    <SocialButton label={'Twitter'} href={'#'}>
                        <FaTwitter color={"#2A2C41"}/>
                    </SocialButton>
                    <SocialButton label={'YouTube'} href={'#'}>
                        <FaYoutube color={"#2A2C41"}/>
                    </SocialButton>
                    <SocialButton label={'Instagram'} href={'#'}>
                        <FaInstagram color={"#2A2C41"}/>
                    </SocialButton>
                </Stack>
            </Flex>
    );
}
const SocialButton = ({children,label,href}) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
            bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
          <VisuallyHidden>{label}</VisuallyHidden>
          {children}
      </chakra.button>
    );
};
