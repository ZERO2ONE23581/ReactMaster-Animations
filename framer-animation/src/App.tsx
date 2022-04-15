import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const boxVars = {
  invisible: {
    x: 500,
    opacity: 0,
    scale: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    x: -500,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function App() {
  const [visible, setVisible] = useState(1);
  const nextPlease = () => setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  const previousPlease = () =>
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  //
  return (
    <Wrapper>
      <AnimatePresence>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) =>
          i === visible ? (
            <Box
              variants={boxVars}
              initial="invisible"
              animate="visible"
              exit="exit"
              key={i}
            >
              {i}
            </Box>
          ) : null
        )}
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
      position: absolute;
      width: 200px;
      display: flex;
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
