import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

interface ILocation {
  state: string;
}
function Coins() {
  const { coinId } = useParams();
  const [loading, setLoading] = useState(false);
  const { state } = useLocation() as ILocation;

  const [info, setInfo] = useState({});
  const [priceInfo, setPriceInfo] = useState({});

  console.log(info);
  console.log(priceInfo);

  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();
      setInfo(infoData);
      setPriceInfo(priceData);
    })();
  }, []);

  return (
    <Container>
      <header>
        <h1>{state}</h1>
      </header>
      <main>{loading ? <span>{}</span> : <h1>"Loading..."</h1>}</main>
    </Container>
  );
}
export default Coins;

const Container = styled.section`
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  header {
    h1 {
      font-size: 3rem;
      color: ${(props) => props.theme.accentColor};
    }
  }
  main {
    h1 {
      font-size: 2.5rem;
      color: ${(props) => props.theme.accentColor};
      text-align: center;
      margin-top: 10%;
    }
    width: 70%;
    ul {
      margin: 30px;
      li {
        margin: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: ${(props) => props.theme.textColor};
        color: ${(props) => props.theme.bgColor};
        padding: 20px 40px;
        border-radius: 15px;
        span {
          font-size: 1.6rem;
          font-weight: bold;
        }
        img {
          width: 3rem;
          height: 3rem;
        }
      }
    }
  }
`;
