import '../styles/globals.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Layout from '../components/Layout';


const theme = extendTheme({
  colors: {
    goodfood: {
      'yellow': '#FDBF50',
      'white': '#FFFFFF',
      'grey':'#F2F2F2',
      'blue': '#2A2C41',
      'red': '#FF724C',
      'facebook':'#1877F2'
}
  }
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
