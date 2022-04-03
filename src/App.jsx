import styled from "styled-components";

function App() {
  return (
    <>
      <div>
        <Box bgColor="cornsilk" />
        <Box bgColor="crimson" />
        <ExtendedBox />
      </div>
    </>
  );
}

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  border: 2px solid black;
  margin: 10px;
  padding: 50px;
  width: 100px;
`;

const ExtendedBox = styled(Box)`
  border-radius: 10px;
  background-color: cornflowerblue;
`;

export default App;
