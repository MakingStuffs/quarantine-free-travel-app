import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { CountryInterface } from "types";
import styled from "styled-components";
import { useEffect, useState } from "react";
const ItemMeta: React.FC<{ data: CountryInterface }> = ({ data }) => {
  const quarantineWithConditions = data.restrictionData?.mentions.find(
    (m) => typeof m === "object" && m.type === "QUARANTINE"
  );
  const isolationWithConditions = data.restrictionData?.mentions.find(
    (m) => typeof m === "object" && m.type === "ISOLATION"
  );
  return (
    <StyledCountryInfo>
      <p>
        This page{" "}
        {quarantineWithConditions ||
        data.restrictionData?.mentions.includes("QUARANTINE")
          ? "mentions the word 'quarantine'"
          : "doesn't mention the word 'quarantine'"}{" "}
      </p>
      {quarantineWithConditions && (
        <p>Quarantine measures may be conditional for this country</p>
      )}
      <p>
        This page{" "}
        {isolationWithConditions ||
        data.restrictionData?.mentions.includes("ISOLATION")
          ? "mentions the word 'isolation'"
          : "doesn't mention the word 'isolation'"}{" "}
      </p>
      {isolationWithConditions && (
        <p>Isolation measures may be conditional for this country</p>
      )}

      <p>
        This page{" "}
        {data.restrictionData?.mentions.includes("CLOSED_BORDER")
          ? "mentions having closed borders"
          : "doesn't mention having closed borders"}
      </p>
    </StyledCountryInfo>
  );
};

const CountryList: React.FC = () => {
  const [possibleCountries, setPossibleCountries] =
    useState<CountryInterface[]>();
  useEffect(() => {
    (async () => {
      try {
        const request = await fetch("/api/possible-countries");
        const result = await request.json();
        setPossibleCountries(result.data);
      } catch (e) {
        console.warn(e);
      }
    })();
  }, []);
  const dateOptions: any = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const today = new Date().toLocaleDateString("en-GB", dateOptions);

  return (
    <section>
      <StyledCountryList>
        {possibleCountries ? (
          possibleCountries.map((country: CountryInterface) => {
            const date = new Date(country.updated as number).toLocaleDateString(
              "en-GB",
              dateOptions
            );
            return (
              <StyledCountryListItem key={country.name}>
                <div>
                  <h2>{country.name.replace(/-/g, " ")}</h2>
                  <ItemMeta data={country} />
                  <StyledCountryListLinks>
                    <Link href={country.urls.countryPage} passHref={true}>
                      <StyledCountryListLink href={country.urls.countryPage}>
                        Travel Advice Page
                      </StyledCountryListLink>
                    </Link>
                    <Link href={country.urls.covidPage} passHref={true}>
                      <StyledCountryListLink href={country.urls.covidPage}>
                        COVID Information Page
                      </StyledCountryListLink>
                    </Link>
                  </StyledCountryListLinks>
                </div>
                <span>Updated: {date === today ? "Today" : date}</span>
              </StyledCountryListItem>
            );
          })
        ) : (
          <Loader />
        )}
      </StyledCountryList>
    </section>
  );
};

const Home: NextPage = () => {
  return (
    <StyledDoc>
      <Head>
        <title>Quarantine Free Travel Destinations</title>
        <meta
          name="description"
          content="Check up the latest countries which might be allowing tourists to visit without an extended quarantine or isolation period."
        />
        <meta name="robots" content="index, follow" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Quarantine Free Travel Destinations"
        />
        <meta
          name="twitter:description"
          content="Check up the latest countries which might be allowing tourists to visit without an extended quarantine or isolation period."
        />
        <meta
          name="twitter:image"
          content="https://quarantinefree.info/assets/images/social/share-card.jpeg"
        />
        <meta name="twitter:site" content="@makingstuffs" />
        <meta name="twitter:creator" content="@makingstuffs" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Quarantine Free Travel Destinations"
        />
        <meta
          property="og:description"
          content="Check up the latest countries which might be allowing tourists to visit without an extended quarantine or isolation period."
        />
        <meta
          property="og:image"
          content="https://quarantinefree.info/assets/images/social/share-card.jpeg"
        />
        <meta property="og:url" content="https://quarantinefree.info" />
        <meta
          property="og:site_name"
          content="Quarantine Free Travel Destinations"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledMain>
        <StyledHeader>
          <h1>Quarantine Free Travel Destinations</h1>
          <p>
            The following countries <span>might</span> be allowing tourists to
            enter without the need to complete an extended quarantine period.
          </p>
        </StyledHeader>
        <CountryList />
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
  min-height: 150vh;
`;

const StyledCountryList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  height: 100%;
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

  > span {
    font-size: 0.75rem;
    opacity: 0.7;
    margin-top: 1rem;
  }
`;
const StyledCountryInfo = styled.div`
  margin-bottom: 1rem;

  p {
    margin: 0;
    font-size: 0.75rem;
    text-align: left;
    opacity: 0.7;
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

const Loader = styled.span`
  position:absolute;
  top: calc(50% - 35px);
  left: calc(50% - 35px);
  width: 70px;
  height: 70px;
  border: 4px solid var(--primary);
  border-bottom-color: var(--accent-2);
  animation rotate 2s linear infinite;
  border-radius: 50%;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    } to {
      transform: rotate(360deg);
    }
  }
`;

export default Home;
