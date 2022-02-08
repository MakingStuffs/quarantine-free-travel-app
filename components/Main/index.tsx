import styled from "styled-components";

const Main: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...rest
}) => {
  return <StyledMain {...rest}>{children}</StyledMain>;
};

const StyledMain = styled.main`
  padding: 1rem;
  min-height: 150vh;
`;

export { Main };
