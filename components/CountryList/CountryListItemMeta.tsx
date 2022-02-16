import { useState } from "react";
import { CountryInterface, RestrictionMention } from "types";
import Link from "next/link";
import styled from "styled-components";

const getCopyText = (mentions: RestrictionMention[]) => {
  let pills = [];
  // Does this country have quarantine with conditions?
  const isQuarantineConditions = mentions.find(
    (m: RestrictionMention) =>
      typeof m === "object" &&
      m.type === "QUARANTINE" &&
      m.matches &&
      m.matches.length > 0 &&
      m.conditions
  );

  // What about isolation?
  const isIsolationConditions = mentions.find(
    (m: RestrictionMention) =>
      typeof m === "object" &&
      m.type === "ISOLATION" &&
      m.matches &&
      m.matches.length > 0 &&
      m.conditions
  );

  // What about isolation?
  const isClosedBorderConditions = mentions.find(
    (m: RestrictionMention) =>
      typeof m === "object" &&
      m.type === "ISOLATION" &&
      m.matches &&
      m.matches.length > 0 &&
      m.conditions
  );

  if (isQuarantineConditions) {
    pills.push("Quarantine");
  }
  if (isIsolationConditions) {
    pills.push("Self Isolation");
  }
  if (isClosedBorderConditions) {
    pills.push("Closed Borders");
  }
  return pills.length > 0 ? (
    <p>
      Mentions:{" "}
      {pills.map((pill, i) => (
        <span key={`${Date.now()}-pill-${i}`}>{pill}</span>
      ))}
    </p>
  ) : null;
};

const getMatches = (mentions: RestrictionMention[]) => {
  const quarantine = mentions.reduce(
    (output: string[], mention: RestrictionMention) => {
      if (
        mention.type === "QUARANTINE" &&
        mention.matches &&
        mention?.matches?.length > 0
      ) {
        output = [...output, ...mention.matches];
      }
      return output;
    },
    []
  );
  const isolation = mentions.reduce(
    (output: string[], mention: RestrictionMention) => {
      if (
        mention.type === "ISOLATION" &&
        mention.matches &&
        mention?.matches?.length > 0
      ) {
        output = [...output, ...mention.matches];
      }
      return output;
    },
    []
  );
  const closedBorder = mentions.reduce(
    (output: string[], mention: RestrictionMention) => {
      if (
        mention.type === "CLOSED_BORDER" &&
        mention.matches &&
        mention?.matches?.length > 0
      ) {
        output = [...output, ...mention.matches];
      }
      return output;
    },
    []
  );

  return { quarantine, isolation, closedBorder };
};

const CountryListItemMeta: React.FC<{ data: CountryInterface }> = ({
  data,
}) => {
  // Should the modal be open?
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Define our toggler function
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const CopyText = getCopyText(data.restrictionData!.mentions);

  const matches = !data.restrictionData?.mentions
    ? null
    : getMatches(data.restrictionData?.mentions);

  return (
    <StyledCountryInfoWrapper>
      <StyledCountryListLinks>
        {!!CopyText ? (
          <StyledCountryListButton onClick={toggleModal}>
            Conditions
          </StyledCountryListButton>
        ) : null}
        <Link href={data.urls.countryPage} passHref={true}>
          <StyledCountryListLink href={data.urls.countryPage}>
            Travel Page
          </StyledCountryListLink>
        </Link>
        <Link href={data.urls.entryRequirementsPage as string} passHref={true}>
          <StyledCountryListLink
            href={data.urls.entryRequirementsPage as string}
          >
            Entry Page
          </StyledCountryListLink>
        </Link>
      </StyledCountryListLinks>
      <StyledCountryInfo aria-hidden={!isOpen}>
        <span role="none"></span>
        <StyledModal
          role="dialog"
          aria-label={`Further information about ${data.name}'s restrictions`}
        >
          <StyledCloseButton onClick={toggleModal}>
            <span>Close</span>
          </StyledCloseButton>
          <StyledModalContent>
            {CopyText}
            <h4>Matched Text</h4>
            <StyledMatches>
              {matches?.quarantine &&
                matches.quarantine.length > 0 &&
                matches.quarantine.map((match, i) => (
                  <p key={`${Date.now()}-${i}-match-qu`}>{match}</p>
                ))}
            </StyledMatches>
          </StyledModalContent>
        </StyledModal>
      </StyledCountryInfo>
    </StyledCountryInfoWrapper>
  );
};

const StyledCountryInfoWrapper = styled.div``;

const StyledCountryInfo = styled.div`
  ${(props) => {
    return `
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.3s ease;
  z-index: 9;
  width: 100%;
  height: 100%;


  &[aria-hidden="true"] {
    opacity: 0;
    z-index: -1;
    > span {
      display: none;
    }
  }
  &[aria-hidden="false"] {
    opacity: 1;
    > span {opacity: 1;}
  }

  > span {
    position: absolute; 
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,0.8);
    width: 100%;
    height: 100%;
    content:"";
  }`;
  }}
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
  font-size: 0.75rem;
  letter-spacing: 1.25px;
  line-height: 1.5;
  &:hover {
    background: var(--primary-dark);
  }
`;

const StyledCountryListButton = styled.button`
  padding: 0.5rem;
  margin: 0.2rem;
  border-radius: 10px;
  background: var(--warning);
  color: var(--dark);
  font-weight: bold;
  transition: 0.3s ease;
  border: none;
  letter-spacing: 1.25px;
  line-height: 1.5;
  font-size: 0.75rem;
  cursor: pointer;

  &:hover {
    background: var(--primary-dark);
  }
`;

const StyledCloseButton = styled.button`
  padding: 0.5rem;
  background: var(--primary);
  color: white;
  cursor: pointer;
  transition: 0.3s ease;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  right: 14px;
  top: 14px;

  &:hover {
    background: var(--primary-dark);
  }

  &::before,
  &::after {
    position: absolute;
    height: 3px;
    width: 25px;
    top: 50%;
    left: 50%;
    content: "";
    background-color: #ffffff;
  }

  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  > span {
    opacity: 0;
    max-width: 0;
    max-height: 0;
  }
`;

const StyledModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #2a313c;
  padding: calc(1.5rem + 40px) 1rem;
  border-radius: 25px;
  box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.3);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 480px;
  width: 95%;
  z-index: 999;
  max-height: 80%;
`;

const StyledModalContent = styled.div`
  > p {
    margin: 0;
    line-height: 1.5rem;
    font-size: 0.75rem;
    text-align: left;

    > span {
      margin: 0 4px;
      background-color: var(--warning);
      color: var(--dark);
      border-radius: 5px;
      padding: 0 4px;
      white-space: nowrap;
    }
  }
  > h4 {
    font-size: 1.5rem;
    font-weight: 900;
  }
`;

const StyledMatches = styled.div`
  line-height: 1.5rem;
  font-size: 0.75rem;
  max-height: 50%;
  height: 300px;
  overflow: auto;
`;

export { CountryListItemMeta };
