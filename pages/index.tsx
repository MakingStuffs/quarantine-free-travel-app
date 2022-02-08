import type { NextPage } from "next";
import styled from "styled-components";
import { Footer, Seo, Main, Header, CountryList } from "components";

const Home: NextPage = () => {
  return (
    <StyledDoc>
      <Seo />
      <Main>
        <Header />
        <CountryList />
      </Main>
      <Footer />
    </StyledDoc>
  );
};

const StyledDoc = styled.div`
  background-image: linear-gradient(45deg, var(--dark), var(--grey));
  color: #f9f8fb;
`;

export default Home;
