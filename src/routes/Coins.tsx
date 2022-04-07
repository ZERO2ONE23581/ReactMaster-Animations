import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  const [coins, setCoins] = useState<ICoin[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.coinpaprika.com/v1/coins");
      const json = await response.json();
      setCoins(json.slice(0, 10));
      setLoading(true);
    })();
  }, []);
  return (
    <Container>
      <header>
        <h1>Crypto</h1>
      </header>
      <main>
        {loading ? (
          <ul>
            {coins.map((coin) => (
              <li key={coin.id}>
                <Link to={coin.id}>
                  <a>{coin.name} &rarr;</a>{" "}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <h1>"Loading..."</h1>
        )}
      </main>
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
        background-color: ${(props) => props.theme.textColor};
        color: ${(props) => props.theme.bgColor};
        padding: 20px;
        border-radius: 15px;
        text-align: start;
        font-size: 1.2rem;
      }
    }
  }
`;
