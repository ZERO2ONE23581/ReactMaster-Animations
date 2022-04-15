import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const boxVars = {
  entry: (isBack: boolean) => ({
    x: isBack ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: (isBack: boolean) => ({
    x: isBack ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.3,
    },
  }),
};

function App() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const nextPlease = () => {
    setBack(false);
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };
  const previousPlease = () => {
    setBack(true);
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  };
  //
  return (
    <Wrapper>
      <AnimatePresence exitBeforeEnter custom={back}>
        <Box
          custom={back}
          variants={boxVars}
          initial="entry"
          animate="center"
          exit="exit"
          key={visible}
        >
          {visible}
        </Box>
      </AnimatePresence>
      <div>
        <button onClick={nextPlease}>&rarr;</button>
        <button onClick={previousPlease}>&larr;</button>
      </div>
    </Wrapper>
  );
}
export default App;

const Box = styled(motion.div)`
  position: absolute;
  top: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  margin: 30px 0;
  width: 200px;
  height: 200px;
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
  div {
    &:nth-of-type(2) {
      width: 200px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      button {
        width: 100%;
        padding: 10px 20px;
        font-size: 28px;
        border: none;
        border-radius: 10px;
        box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
        background-color: rgba(255, 255, 255, 0.4);
      }
    }
  }
`;
