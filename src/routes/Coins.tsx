import styled from "styled-components";

function Coins() {
  return (
    <>
      <Title>Coins</Title>
    </>
  );
}

const Title = styled.h1`
  font-size: 4rem;
  color: ${(props) => props.theme.accentColor};
`;

export default Coins;
