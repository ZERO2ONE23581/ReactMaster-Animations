import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";

function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery(["ohlcv", coinId], () => fetchCoinHistory(coinId));
  console.log(isLoading, data);
  return <div>Chart</div>;
}

export default Chart;

interface ChartProps {
  coinId: string;
}
