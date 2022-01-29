import { GlobalStyles, GlobalColors, GlobalFonts } from "styles";
import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalFonts />
      <GlobalColors />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
