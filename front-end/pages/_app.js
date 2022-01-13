import '../styles/globals.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Layout from '../components/layout/Layout';

const theme = extendTheme({
  colors: {
    goodfood:{
      'yellow':'#FDBF50',
      'white':'#F4F4F8',
      'blue':'#2A2C41',
      'red':'#FF724C'
    }
  },
  styles: {
    global: {
      body: {
        bg: 'goodfood.white',
        color: 'goodfood.white',
      },
      a: {
        color: 'teal.500',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
      },
      sizes: {
        xl: {
          h: '56px',
          fontSize: 'lg',
          px: '32px',
        },
      },
      variants: {
        'good-food': {
          bg: 'goodfood.yellow',
          color:"goodfood.white",
          _hover:{
            color:"goodfood.red"
          }
        },
      },
    },
    Container: {
      variants: {
        'white-round': {
          backgroundColor: 'white',
          color: 'goodfood.blue',
          borderRadius: '20px',
          padding: 5,
        },
      },
    },
  },
});
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
