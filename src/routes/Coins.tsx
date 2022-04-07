import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "../api";

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
  //react query는 데이터를 cash에 저장하기에, coin 페이지에서 -> coins 페이지로 돌아왔을때 loading이 보이지 않는다!
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);

  return (
    <Container>
      <header>
        <h1>Top 10 Crypto</h1>
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
