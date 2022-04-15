import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

function App() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => {
    setClicked((prev) => !prev);
  };
  //
  return (
    <Wrapper onClick={toggleClicked}>
      <Box>
        {clicked ? (
          <Circle layoutId="circle" style={{ borderRadius: '20px' }} />
        ) : null}
      </Box>
      <Box>
        {!clicked ? (
          <Circle
            layoutId="circle"
            style={{ borderRadius: '50%', scale: '2' }}
          />
        ) : null}
      </Box>
    </Wrapper>
  );
}
export default App;

const Circle = styled(motion.div)`
  background-color: #00a1ff;
  width: 100px;
  height: 100px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
`;

const Box = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 400px;
  border-radius: 50px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  background-color: rgba(255, 255, 255, 0.4);
`;

const Wrapper = styled.section`
  background: linear-gradient(135deg, rgb(46, 75, 204), rgb(52, 219, 99));
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
