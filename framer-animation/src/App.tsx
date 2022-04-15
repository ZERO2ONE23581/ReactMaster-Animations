import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const boxVars = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 360,
  },
  leaving: {
    opacity: 0,
    y: 100,
  },
};

function App() {
  const [showing, setShowing] = useState(false);
  const toggleShowing = () => setShowing((prev) => !prev);
  //
  return (
    <Wrapper>
      <AnimatePresence>
        {showing ? (
          <Box
            variants={boxVars}
            initial="initial"
            animate="visible"
            exit="leaving"
          />
        ) : null}
      </AnimatePresence>
      <button onClick={toggleShowing}>Click</button>
    </Wrapper>
  );
}
export default App;

const Box = styled(motion.div)`
  margin: 30px 0;
  width: 600px;
  height: 600px;
  border-radius: 20px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  background-color: rgba(255, 255, 255, 0.4);
`;

const Wrapper = styled.section`
  background: linear-gradient(135deg, rgb(46, 75, 204), rgb(52, 219, 99));
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    background-color: rgba(255, 255, 255, 0.1);
    width: 50%;
    padding: 20px;
    font-size: 1.2rem;
    border-radius: 10px;
    border: none;
  }
`;
