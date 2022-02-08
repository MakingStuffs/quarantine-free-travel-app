import styled from "styled-components";

const Footer: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  ...rest
}) => {
  return (
    <StyledFooter {...rest}>
      <p>
        Made with love by{" "}
        <a href="https://makingstuffs.co.uk" title="My website">
          Making Stuffs
        </a>
      </p>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  text-align: center;
  padding: 4rem 0;
  background-color: var(--accent-3);
  margin-top: 4rem;
`;

export { Footer };
