import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ReactApexChart from "react-apexcharts";
import { textChangeRangeNewSpan } from "typescript";

function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  return (
    <div>
      {isLoading ? (
        "Loading Chart..."
      ) : (
        <ReactApexChart
          type="line"
          series={[
            {
              name: "price",
              data: data?.map((price) => price.close) ?? [],
            },
          ]}
          options={{
            yaxis: { show: false },
            xaxis: { labels: { show: false }, axisTicks: { show: false } },
            stroke: { curve: "smooth", width: 10 },
            theme: { mode: "dark" },
            chart: {
              background: "transparent",
              toolbar: { show: false },
              width: 300,
              height: 300,
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface ChartProps {
  coinId: string;
}
