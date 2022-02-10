import styled from "styled-components";
import { CountryInterface } from "types";
import { CountryListItemMeta } from "./CountryListItemMeta";

const dateOptions: any = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const today = new Date().toLocaleDateString("en-GB", dateOptions);

const CountryListItem: React.FC<
  { country: CountryInterface } & React.HTMLAttributes<HTMLLIElement>
> = ({ country, ...rest }) => {
  // When was this country updated?
  const date = new Date(country.updated as number).toLocaleDateString(
    "en-GB",
    dateOptions
  );

  // Does it have any conditionals?
  const hasConditions = !!country.restrictionData?.mentions.find(
    (mention) => mention.conditions
  );

  return (
    <StyledCountryListItem
      key={country.name}
      hasConditions={hasConditions}
      {...rest}
    >
      <div>
        <h2>{country.name.replace(/-/g, " ")}</h2>
        <CountryListItemMeta data={country} />
      </div>
      <span>Updated: {date === today ? "Today" : date}</span>
    </StyledCountryListItem>
  );
};

const StyledCountryListItem = styled.li<{ hasConditions: boolean }>`
  ${({ hasConditions }) => `
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
      background-color: ${hasConditions ? "var(--warning)" : "var(--primary)"};
      width: calc(100% + 5px);
      content: "";
      left: 50%;
      border-radius: 5px;
      transform: translateX(-50%);
    }
  }

  > span {
    font-size: 0.65rem;
    opacity: 0.7;
    margin-top: 1rem;
  }
`}
`;

export { CountryListItem };
