import { useState } from "react";
import { CountryInterface, RestrictionMention } from "types";
import Link from "next/link";
import styled from "styled-components";

const getCopyText = (mentions: RestrictionMention[]) => {
  let output = [];
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
    output.push([
      <p key={Date.now()}>Mentions &lsquo;quarantine&lsquo;</p>,
      <p key={Date.now() + 1}>Quarantine may be conditional</p>,
    ]);
  }
  if (isIsolationConditions) {
    output.push([
      <p key={Date.now()}>Mentions &lsquo;isolation&lsquo;</p>,
      <p key={Date.now() + 1}>Isolation may be conditional</p>,
    ]);
  }
  if (isClosedBorderConditions) {
    output.push([
      <p key={Date.now()}>Mentions &lsquo;closed borders&lsquo;</p>,
      <p key={Date.now() + 1}>Closed borders may be conditional</p>,
    ]);
  }
  return output;
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

  return (
    <StyledCountryInfoWrapper>
      <StyledCountryListLinks>
        {CopyText && CopyText.length > 0 ? (
          <StyledCountryListButton onClick={toggleModal}>
            Conditions
          </StyledCountryListButton>
        ) : null}
        <Link href={data.urls.countryPage} passHref={true}>
          <StyledCountryListLink href={data.urls.countryPage}>
            Travel Page
          </StyledCountryListLink>
        </Link>
        <Link href={data.urls.covidPage} passHref={true}>
          <StyledCountryListLink href={data.urls.covidPage}>
            COVID Page
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
          <StyledModalContent>{[...CopyText]}</StyledModalContent>
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
`;

const StyledModalContent = styled.div`
  > p {
    margin: 0;
    line-height: 1.5rem;
    font-size: 0.75rem;
    text-align: left;
  }
`;

export { CountryListItemMeta };
