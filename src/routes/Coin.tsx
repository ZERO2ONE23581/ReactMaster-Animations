import { useEffect, useState } from "react";
import { useMatch } from "react-router-dom";
import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import Chart from "./Chart";
import Price from "./Price";

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
  const { state } = useLocation() as ILocation;

  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState<IInfoData>();
  const [priceInfo, setPriceInfo] = useState<IPriceData>();

  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coinId/chart");

  console.log("PRICE: ", priceMatch);
  console.log("CHART: ", chartMatch);

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
      setLoading(false);
    })();
  }, [coinId]);
  return (
    <Container>
      <header>
        <h1>{state ? state : loading ? "Loading..." : info?.name}</h1>
      </header>
      <main>
        {loading ? (
          <h1>"Loading..."</h1>
        ) : (
          <>
            <section>
              <article>
                <ul>
                  <li>Rank: {info?.rank}</li>
                  <li>Symbol: {info?.symbol}</li>
                  <li>Open Source: {info?.open_source ? "YES" : "NO"}</li>
                </ul>
              </article>
              <article>
                <p>{info?.description}</p>
              </article>
              <article>
                <ul>
                  <li>Total Supply: {priceInfo?.total_supply}</li>
                  <li>Max Supply: {priceInfo?.max_supply}</li>
                </ul>
              </article>
              <div>
                <Btn isActive={chartMatch !== null}>
                  <Link to={`/${coinId}/chart`}>CHART</Link>
                </Btn>
                <Btn isActive={priceMatch !== null}>
                  <Link to={`/${coinId}/price`}>PRICE</Link>
                </Btn>
              </div>
            </section>
            <section>
              <Routes>
                <Route path="chart" element={<Chart />}></Route>
                <Route path="price" element={<Price />}></Route>
              </Routes>
            </section>
          </>
        )}
      </main>
    </Container>
  );
}
export default Coins;

const Btn = styled.button<{ isActive: boolean }>`
  width: 60%;
  border: none;
  border-radius: 20px;
  font-size: 1.3rem;
  padding: 15px;
  background-color: ${(props) => props.theme.accentColor};
  color: ${(props) => (props.isActive ? props.theme.textColor : props.theme.bgColor)};
  a {
    display: block;
  }
`;

const Container = styled.section`
  section {
    div {
      display: flex;
      gap: 5%;
    }
    font-size: 1.6rem;
    padding: 50px;
    min-width: 50%;
    margin: 0 auto;
    ul {
      font-size: 1.3rem;
      border-radius: 20px;
      padding: 15px 30px;
      background-color: ${(props) => props.theme.accentColor};
      display: flex;
      justify-content: space-between;
    }
    article {
      background-color: ${(props) => props.theme.bgColor};
      color: ${(props) => props.theme.bgColor};
      margin: 50px 0;
      p {
        text-align: center;
        color: ${(props) => props.theme.accentColor};
      }
    }
  }
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
  }
`;
