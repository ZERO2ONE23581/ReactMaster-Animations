import styled from "styled-components";
import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

function App() {
  const x = useMotionValue(0);
  // useEffect(() => {
  //   x.onChange(() => console.log(x.get()));
  // }, [x]);
  return (
    <Wrapper>
      <button onClick={() => x.set(200)}>Click Me</button>
      <Box style={{ x }} drag="x" dragSnapToOrigin />
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
