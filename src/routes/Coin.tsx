import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

interface ILocation {
  state: string;
}

interface IInfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  links: object;
  links_extended: object;
  whitepaper: object;
  first_data_at: string;
  last_data_at: string;
}

interface IPriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    ath_date: string;
    ath_price: number;
    market_cap: number;
    market_cap_change_24h: number;
    percent_change_1h: number;
    percent_change_1y: number;
    percent_change_6h: number;
    percent_change_7d: number;
    percent_change_12h: number;
    percent_change_15m: number;
    percent_change_24h: number;
    percent_change_30d: number;
    percent_change_30m: number;
    percent_from_price_ath: number;
    price: number;
    volume_24h: number;
    volume_24h_change_24h: number;
  };
}

function Coins() {
  const { coinId } = useParams();
  const [loading, setLoading] = useState(false);
  const { state } = useLocation() as ILocation;

  const [info, setInfo] = useState<IInfoData>();
  const [priceInfo, setPriceInfo] = useState<IPriceData>();

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
      <main>{loading ? null : <h1>"Loading..."</h1>}</main>
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
