import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef } from "react";

const boxVars = {
  hover: {
    rotateZ: 90,
  },
  click: {
    borderRadius: "100%",
  },
};

function App() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  return (
    <Wrapper>
      <BiggerBox ref={biggerBoxRef}>
        <Box
          drag
          dragConstraints={biggerBoxRef}
          dragSnapToOrigin
          dragElastic={0.5}
          variants={boxVars}
          whileHover="hover"
          whileTap="click"
        />
      </BiggerBox>
    </Wrapper>
  );
}
export default App;

const BiggerBox = styled.div`
  background-color: rgb(236, 240, 241);
  width: 600px;
  height: 600px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Box = styled(motion.div)`
  background-color: white;
  align-items: center;
  border-radius: 40px;
  width: 200px;
  height: 200px;
`;
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
