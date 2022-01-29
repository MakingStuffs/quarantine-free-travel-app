import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { possibleCountries } from "data";
import { PossibleCountriesData } from "types";
import styled from "styled-components";

const ItemMeta: React.FC<{ data: PossibleCountriesData }> = ({ data }) => {
  return (
    <StyledCountryInfo>
      <p>
        This page{" "}
        {data.restrictionData.mentionsQuarantine
          ? "mentions the word 'quarantine'"
          : "does't mention the word 'quarantine'"}{" "}
      </p>
      {data.restrictionData.withConditions && (
        <p>Quarantine measures may be conditional for this country</p>
      )}
      <p>
        This page{" "}
        {data.restrictionData.closedBorders
          ? "mentions having closed borders"
          : "doesn't mention having closed borders"}
      </p>
    </StyledCountryInfo>
  );
};

const Home: NextPage = () => {
  return (
    <StyledDoc>
      <Head>
        <title>Quarantine Free Travel Destinations</title>
      </Head>
      <StyledMain>
        <StyledHeader>
          <h1>Quarantine Free Travel Destinations</h1>
          <p>
            The following countries <span>might</span> be allowing tourists to
            enter without the need to an extended quarantine period.
          </p>
        </StyledHeader>
        <section>
          <StyledCountryList>
            {possibleCountries.map((country: PossibleCountriesData) => {
              return (
                <StyledCountryListItem key={country.country}>
                  <div>
                    <h2>{country.country.replace(/-/g, " ")}</h2>
                    <ItemMeta data={country} />
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
      </StyledMain>
      <StyledFooter>
        <p>
          Made with love by{" "}
          <a href="https://makingstuffs.co.uk" title="My website">
            Making Stuffs
          </a>
        </p>
      </StyledFooter>
    </StyledDoc>
  );
};

const StyledHeader = styled.header`
  max-width: 960px;
  margin: 5rem auto;
  color: var(--light);
  width: 80vw;

  > p > span {
    background-color: var(--primary);
    padding: 1px 5px 2px 5px;
    border-radius: 5px;
    line-height: 1.5;
  }
`;

const StyledDoc = styled.div`
  background-image: linear-gradient(45deg, var(--dark), var(--grey));
  color: #f9f8fb;
`;

const StyledMain = styled.main`
  padding: 1rem;
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
  background-color: #2a313c;
  padding: 1rem;
  border-radius: 25px;
  box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.3);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 480px;
  width: 100%;

  > div > h2 {
    margin: 0 0 calc(1.35rem + 3px) 0;
    font-weight: 700;
    text-transform: capitalize;
    font-size: 1.5rem;
    position: relative;
    display: inline-block;

    &::after {
      position: absolute;
      top: calc(100% + 0.35rem);
      height: 3px;
      background-color: var(--primary);
      width: calc(100% + 5px);
      content: "";
      left: 50%;
      border-radius: 5px;
      transform: translateX(-50%);
    }
  }
`;
const StyledCountryInfo = styled.div`
  margin-bottom: 1rem;

  p {
    margin: 0;
    font-size: 0.75rem;
    text-align: left;
    opacity: 0.7;
    text-align: center;
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
  border-radius: 10px;
  background: var(--primary);
  color: white;
  transition: 0.3s ease;

  &:first-of-type {
    margin-left: 0;
  }
  &:last-of-type {
    margin-right: 0;
  }

  &:hover {
    background: var(--primary-dark);
  }
`;

const StyledFooter = styled.footer`
  text-align: center;
  padding: 4rem 0;
  background-color: var(--accent-3);
  margin-top: 4rem;
`;

export default Home;
