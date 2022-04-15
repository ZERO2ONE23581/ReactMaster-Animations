import styled from "styled-components";
import { motion } from "framer-motion";

const boxVars = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const circleVars = {
  start: {
    opacity: 0,
    y: 10,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

function App() {
  return (
    <Wrapper>
      <Box variants={boxVars} initial="start" animate="end">
        <Cricle variants={circleVars} />
        <Cricle variants={circleVars} />
        <Cricle variants={circleVars} />
        <Cricle variants={circleVars} />
      </Box>
    </Wrapper>
  );
}
export default App;

const Cricle = styled(motion.div)`
  place-self: center;
  background-color: blueviolet;
  width: 70px;
  height: 70px;
  border-radius: 35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Box = styled(motion.div)`
  border-radius: 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 200px;
  height: 200px;
  background-color: white;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
