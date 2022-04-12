import { useQuery } from "react-query";
import { useMatch } from "react-router-dom";
import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchCoinInfo, fetchCoinTickers } from "../api";
import Chart from "./Chart";
import Price from "./Price";
import Helmet from "react-helmet";

interface ICoinsProp {
  isDark: boolean;
}

function Coins({ isDark }: ICoinsProp) {
  const { coinId } = useParams();
  const { state } = useLocation() as ILocation;

  //useMatch
  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coinId/chart");

  //React Query
  const { isLoading: infoLoading, data: infoData } = useQuery<IInfoData>(
    ["info", coinId!],
    () => fetchCoinInfo(coinId!)
  );
  const { isLoading: tickersLoading, data: tickersData } = useQuery<ITickersData>(
    ["tickers", coinId!],
    () => fetchCoinTickers(coinId!),
    {
      refetchInterval: 5000, //5초마다 refetch함
    }
  );

  const loading = infoLoading || tickersLoading;

  return (
    <Container>
      <Helmet>
        <title>{state ? state : loading ? "Loading..." : infoData?.name}</title>
      </Helmet>
      <header>
        <h1>{state ? state : loading ? "Loading..." : infoData?.name}</h1>
      </header>
      <main>
        {loading ? (
          <h1>"Loading..."</h1>
        ) : (
          <>
            <section>
              <article>
                <ul>
                  <li>
                    <span>Rank: </span>
                    <span>{infoData?.rank}</span>
                  </li>
                  <li>
                    <span>Symbol: </span>
                    <span>{infoData?.symbol}</span>
                  </li>
                  <li>
                    <span>Price: </span>
                    <span>$ {tickersData?.quotes.USD.price.toFixed(2)}</span>
                  </li>
                  <li>
                    <span>Total Supply: </span>
                    <span>{tickersData?.total_supply}</span>
                  </li>
                  <li>
                    <span>Max Supply: </span>
                    <span>{tickersData?.max_supply}</span>
                  </li>
                </ul>
              </article>
              <article>
                <p>{infoData?.description}</p>
              </article>
              <article>
                <div>
                  <Btn isActive={chartMatch !== null}>
                    <Link to={`/${coinId}/chart`}>CHART</Link>
                  </Btn>
                  <Btn isActive={priceMatch !== null}>
                    <Link to={`/${coinId}/price`}>PRICE</Link>
                  </Btn>
                </div>
              </article>
            </section>
            <section>
              <Routes>
                <Route
                  path="chart"
                  element={<Chart isDark={isDark} coinId={coinId as string} />}
                ></Route>
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

interface ITickersData {
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
    USD: {
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
  };
}

const Container = styled.section`
  margin: 0 auto;
  height: 100vh;
  width: 50%;
  min-width: 500px;
  padding: 20px;
  text-align: center;
  color: ${(props) => props.theme.accentColor};
  header {
    h1 {
      font-size: 3rem;
      margin-top: 100px;
    }
  }
  main {
    padding: 50px 20px;
    section {
      font-size: 1.2rem;
      article {
        ul {
          border: 1px solid ${(props) => props.theme.textColor};
          color: ${(props) => props.theme.textColor};
          background-color: ${(props) => props.theme.bgColor};
          padding: 20px;
          display: flex;
          justify-content: space-between;
        }
        p {
          font-size: 1.4em;
          text-align: center;
          padding: 50px 0;
          color: ${(props) => props.theme.accentColor};
        }
        div {
          display: flex;
        }
      }
    }
  }
`;
const Btn = styled.button<{ isActive: boolean }>`
  font-size: 1.4rem;
  width: 100%;
  padding: 15px;
  border: 1px solid ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => (props.isActive ? props.theme.accentColor : props.theme.textColor)};
  &:hover {
    border: 1px solid ${(props) => props.theme.accentColor};
  }
  a {
    display: block;
  }
`;
