import styled from "styled-components";

const Header: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  ...rest
}) => {
  return (
    <StyledHeader {...rest}>
      <h1>Quarantine Free Travel Destinations</h1>
      <p>
        The following countries <span>might</span> be allowing tourists to enter
        without the need to complete an extended quarantine period.
      </p>
      <p>
        The information on this page may <span>not</span> be entirely{" "}
        <span>accurate</span> as it is collected via a web scraper which uses
        regex matching patterns to try and assess the text content of the Gov.uk
        advice pages.
      </p>
    </StyledHeader>
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

export { Header };
