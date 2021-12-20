import '../styles/globals.css'
import {ChakraProvider} from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
      <ChakraProvider>
          <style global jsx>{`
              html,
              body,
              body > div:first-child,
              div#__next,
              div#__next > div {
                height: 100%;
              }
            `}</style>
        <Component {...pageProps} />
      </ChakraProvider>
  );
}

export default MyApp
