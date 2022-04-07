import styled from "styled-components";

const coins = [
  {
    id: "btc-bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    rank: 1,
    is_new: false,
    is_active: true,
    type: "coin",
  },
  {
    id: "eth-ethereum",
    name: "Ethereum",
    symbol: "ETH",
    rank: 2,
    is_new: false,
    is_active: true,
    type: "coin",
  },
  {
    id: "usdt-tether",
    name: "Tether",
    symbol: "USDT",
    rank: 3,
    is_new: false,
    is_active: true,
    type: "token",
  },
];

function Coins() {
  return (
    <Container>
      <header>
        <h1>Crypto</h1>
      </header>
      <main>
        <ul>
          {coins.map((coin) => (
            <li key={coin.id}>{coin.name} &rarr;</li>
          ))}
        </ul>
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
    width: 70%;
    ul {
      margin: 20px;
      li {
        margin: 15px;
        background-color: ${(props) => props.theme.textColor};
        color: ${(props) => props.theme.bgColor};
        padding: 20px;
        border-radius: 25px;
        text-align: start;
        font-size: 1.2rem;
      }
    }
  }
`;
