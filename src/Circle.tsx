import styled from "styled-components";

interface CircleProps {
  bgColor: string;
  borderColor?: string;
}

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

function Circle({ bgColor, borderColor }: CircleProps) {
  return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} />;
}

export default Circle;

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 10px;
  background-color: ${(props) => props.bgColor};
  border: 10px solid ${(props) => props.borderColor};
`;
