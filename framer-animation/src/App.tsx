import styled from "styled-components";
import { motion, useMotionValue, useTransform, useViewportScroll } from "framer-motion";
import { useEffect } from "react";

function App() {
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    x,
    [-800, 800],
    [
      "linear-gradient(135deg, rgb(204, 128, 46), rgb(216, 52, 219))",
      "linear-gradient(135deg, rgb(46, 75, 204), rgb(52, 219, 99))",
    ]
  );
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);
  //
  return (
    <Wrapper style={{ background: gradient }}>
      <Box style={{ x, rotateZ, scale }} drag="x" dragSnapToOrigin />
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
const Wrapper = styled(motion.div)`
  height: 200vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
