import { GlobalStyles, GlobalColors } from "styles";
import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyles />
      <GlobalColors />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
