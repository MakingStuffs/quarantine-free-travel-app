import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { possibleCountries } from "data";
import { CombinedPageData } from "types";
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <StyledDoc>
      <Head>
        <title>UK Quarantine Free Travel</title>
      </Head>
      <main>
        <header>
          <h1>
            Check the countries which possibly allow UK citizens to enter
            without quarantine
          </h1>
        </header>
        <section>
          <p>
            The following countries might be allowing UK visitors to enter
            without an extended quarantine period.
          </p>
          <StyledCountryList>
            {possibleCountries.map((country: CombinedPageData) => {
              return (
                <StyledCountryListItem>
                  <div>
                    <p>{country.country.replace(/-/g, " ")}</p>
                    <StyledCountryListLinks>
                      <Link href={country.countryPage}>
                        <StyledCountryListLink href={country.countryPage}>
                          Travel Advice Page
                        </StyledCountryListLink>
                      </Link>
                      <Link href={country.coronaPage}>
                        <StyledCountryListLink href={country.coronaPage}>
                          COVID Information Page
                        </StyledCountryListLink>
                      </Link>
                    </StyledCountryListLinks>
                  </div>
                </StyledCountryListItem>
              );
            })}
          </StyledCountryList>
        </section>
      </main>
      <footer>
        <p>
          Made with love by <a href="">Making Stuffs</a>
        </p>
      </footer>
    </StyledDoc>
  );
};

const StyledDoc = styled.div`
  padding: 1rem;
  background-image: linear-gradient(45deg, #0c0910, #131221);
  color: #f9f8fb;
`;

const StyledCountryList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledCountryListItem = styled.li`
  margin: 0.5rem;
  background-color: #272643;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.3);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 480px;
  width: 100%;

  > div > p {
    margin: 0 0 2rem 0;
    font-weight: 700;
    text-transform: capitalize;
    font-size: 1.5rem;
  }
`;
const StyledCountryListLinks = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const StyledCountryListLink = styled.a`
  padding: 0.5rem;
  margin: 0.2rem;
  border-radius: 5px;
  background: #5344d1;
  color: white;
  transition: 0.3s ease;

  &:first-of-type {
    margin-left: 0;
  }
  &:last-of-type {
    margin-right: 0;
  }

  &:hover {
    background: #3454d1;
  }
`;

export default Home;
