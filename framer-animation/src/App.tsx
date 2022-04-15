import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

function App() {
  const [clicked, setClicked] = useState(false);
  const toggle = () => {
    setClicked((prev) => !prev);
  };
  //
  return (
    <Wrapper onClick={toggle}>
      <Grid>
        <Box layoutId="firstBox" />
        <Box />
        <Box />
        <Box />
      </Grid>
      <AnimatePresence>
        {clicked ? (
          <Overlay
            initial={{ backgroundColor: ' rgba(0, 0, 0, 0)' }}
            animate={{ backgroundColor: ' rgba(0, 0, 0, 0.8)' }}
            exit={{ backgroundColor: ' rgba(0, 0, 0, 0)' }}
          >
            <Box layoutId="firstBox" style={{ width: 400, height: 200 }} />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}
export default App;

const Overlay = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 10px;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Box = styled(motion.div)`
  height: 200px;
  border-radius: 10px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  background-color: rgba(255, 255, 255, 0.8);
`;

const Wrapper = styled.section`
  background: linear-gradient(135deg, rgb(46, 75, 204), rgb(52, 219, 99));
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
