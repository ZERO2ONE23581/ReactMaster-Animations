import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

function App() {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);
  useEffect(() => {
    // x.onChange(() => console.log(x.get()));
    x.onChange(() => console.log(scale.get()));
  }, [x]);
  return (
    <Wrapper>
      <Box style={{ x, scale }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}
export default App;

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
