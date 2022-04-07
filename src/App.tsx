import styled from "styled-components";

function App() {
  return (
    <Container>
      <H1>HELLO WORLD</H1>
      <button>START</button>
    </Container>
  );
}

export default App;

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  button {
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
    font-size: 2rem;
    background-color: inherit;
    color: ${(props) => props.theme.textColor};
    &:hover {
      background-color: ${(props) => props.theme.btnColor};
      color: black;
    }
  }
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
  font-size: 4rem;
`;
