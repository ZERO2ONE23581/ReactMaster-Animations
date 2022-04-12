import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "../api";
import Helmet from "react-helmet";

function Coins() {
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);

  return (
    <Container>
      <Helmet>
        <title>Top10 Crypto Currency</title>
      </Helmet>
      <header>
        <h1>Top 10 Crypto Currency</h1>
        <button>Toggle Mode</button>
      </header>
      <main>
        {isLoading ? (
          <h1>"Loading..."</h1>
        ) : (
          <ul>
            {data?.slice(0, 10).map((coin) => (
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

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const Container = styled.section`
  margin: 0 auto;
  padding: 20px;
  width: 40%;
  h1 {
    text-align: center;
    font-size: 3rem;
    margin: 50px auto;
    color: ${(props) => props.theme.accentColor};
  }
  main {
    width: 70%;
    margin: 0 auto;
    ul {
      display: flex;
      flex-direction: column;
      gap: 20px;
      li {
        padding: 10px 20px;
        border: 1px solid ${(props) => props.theme.textColor};
        display: flex;
        align-items: center;
        justify-content: space-between;
        &:hover {
          border: 1px solid ${(props) => props.theme.accentColor};
          color: ${(props) => props.theme.accentColor};
        }
        color: ${(props) => props.theme.textColor};
        span {
          font-size: 1.4rem;
          font-weight: bold;
          &:hover {
          }
        }
        img {
          width: 2.5rem;
          height: 2.5em;
        }
      }
    }
  }
`;
