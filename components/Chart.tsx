import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Brush,
} from 'recharts';
import { GraphingData } from '../types';

interface ChartProps {
  data: GraphingData[];
  startIndex: number;
}

const Chart = (props: ChartProps) => {
  const { data, startIndex } = props;

  return (
    <div className="mx-auto lg:w-4/5">
      <ResponsiveContainer height={360}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{ bottom: 60, left: 20 }}
        >
          <CartesianGrid strokeDasharray="1 12" />
          <Legend verticalAlign="top" height={36} />
          <XAxis dataKey="day" angle={-30} tickMargin={30} stroke="#9da3a5" />
          <YAxis yAxisId="left" stroke="#9da3a5" />
          <YAxis yAxisId="right" orientation="right" stroke="#9da3a5" />
          <Tooltip labelStyle={{ color: '#161616' }} />
          {data[0].performedTests && <Line yAxisId="left" type="monotone" dataKey="performedTests" stroke="#4b7c14" dot={false} />}
          {data[0].positiveTests && <Line yAxisId="right" type="monotone" dataKey="positiveTests" stroke="#9c6410" dot={false} />}
          <Brush fill="#d7e1e6" travellerWidth={10} y={320} startIndex={startIndex} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
