import styled from "styled-components";

interface CircleProps {
  bgColor: string;
}
interface ContainerProps {
  bgColor: string;
}

function Circle({ bgColor }: CircleProps) {
  return <Container bgColor={bgColor}></Container>;
}

export default Circle;

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 10px;
  background-color: ${(props) => props.bgColor};
`;
