import '../styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#2A2C41',
        color: '#F4F4F8',
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
          bg: '#FDBF50'
        },
      },
    },
    Container:{
      variants:{
        'white-round':{
          backgroundColor:'#F4F4F8',
          color: '#404040',
          borderRadius:"20px",
          padding:5,
          margin:1
        }
      }
    }
  },
})
function MyApp({ Component, pageProps }) {
  return (
      <ChakraProvider theme={theme}>
        <style global jsx>{`html,body,body > div:first-child,div#__next,div#__next > div {height: 100%;}`}</style>
        <Component {...pageProps}/>
      </ChakraProvider>
  );
}

export default MyApp
