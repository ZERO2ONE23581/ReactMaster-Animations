import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ReactApexChart from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";

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

function Chart({ coinId }: ChartProps) {
  const isDark = useRecoilValue(isDarkAtom);
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId),
    { refetchInterval: 10000 }
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
            tooltip: {
              y: {
                formatter: (value) => `$${value.toFixed(3)}`,
              },
            },
            fill: {
              type: "gradient",
              gradient: { gradientToColors: ["blue"], stops: [0, 100] },
            },
            colors: ["#0be881"],
            yaxis: { show: false },
            xaxis: {
              type: "datetime",
              categories: data?.map((price) => price.time_close) ?? [],
              labels: { show: false },
              axisTicks: { show: false },
              axisBorder: { show: false },
            },
            stroke: { curve: "smooth", width: 10 },
            theme: { mode: isDark ? "dark" : "light" },
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
