import { useEffect, useState } from "react";
import styled from "styled-components";
import { CountryInterface } from "types";
import { CountryListItem } from "./CountryListItem";

const CountryList: React.FC = () => {
  const [possibleCountries, setPossibleCountries] =
    useState<CountryInterface[]>();
  useEffect(() => {
    (async () => {
      try {
        const request = await fetch("/api/possible-countries");
        const result = await request.json();
        setPossibleCountries(
          result.data.sort((a: CountryInterface, b: CountryInterface) =>
            a.name > b.name ? 1 : -1
          )
        );
      } catch (e) {
        console.warn(e);
      }
    })();
  }, []);
  return (
    <section>
      <StyledCountryList>
        {possibleCountries ? (
          possibleCountries.map((country: CountryInterface) => (
            <CountryListItem key={`${country.name}-item`} country={country} />
          ))
        ) : (
          <Loader />
        )}
      </StyledCountryList>
    </section>
  );
};

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

export { CountryList, CountryListItem };
export * from "./CountryListItemMeta";
