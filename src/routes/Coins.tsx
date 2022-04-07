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
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.coinpaprika.com/v1/coins");
      const json = await response.json();
      setCoins(json.slice(0, 10));
      setLoading(false);
    })();
  }, []);
  return (
    <Container>
      <header>
        <h1>Crypto</h1>
      </header>
      <main>
        {loading ? (
          <h1>"Loading..."</h1>
        ) : (
          <ul>
            {coins.map((coin) => (
              <Link to={coin.id} state={coin.name}>
                <a>
                  <li key={coin.id}>
                    <span>{coin.name} &rarr;</span>
                    <img
                      src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
                      alt="코인로고 이미지"
                    />
                  </li>
                </a>
              </Link>
            ))}
          </ul>
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
