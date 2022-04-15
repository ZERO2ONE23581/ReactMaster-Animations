import styled from "styled-components";
import { motion } from "framer-motion";

const boxVars = {
  hover: {
    scale: 2,
    rotateZ: 90,
  },
  click: {
    scale: 1,
    borderRadius: "100%",
  },
  drag: {
    backgroundColor: "rgb(46, 204, 113)",
    transition: {
      duration: 5,
    },
  },
};

function App() {
  return (
    <Wrapper>
      <Box variants={boxVars} whileHover="hover" whileTap="click" drag whileDrag="drag" />
    </Wrapper>
  );
}
export default App;

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
