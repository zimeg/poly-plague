import { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Brush,
} from 'recharts';
import { GraphingData, RawGraphingData } from '../types';

interface InformationalTooltipProps {
  active: boolean;
  payload: any;
}

const InformationalTooltip = ({ active, payload }: InformationalTooltipProps) => {
  if (active && payload && payload.length) {
    const day: GraphingData = payload[0].payload;
    if (day['Positive tests'] !== undefined && day['Performed tests'] !== undefined) {
      if (day['Performed tests'] > 0) day['Daily positivity'] = (100 * +(day['Positive tests'])) / +(day['Performed tests']);
      else day['Daily positivity'] = 0;
    }

    return (
      <div className="w-52 bg-neutral-700/60 px-2 py-1 rounded-lg space-y-1 text-neutral-200">
        <h3 className="text-center font-bold">{day.date}</h3>
        {day['Positive tests'] !== undefined && (
          <div className="flex justify-between">
            <div>Positive tests</div>
            <div className="bg-yellow-700 px-2 rounded">{day['Positive tests']}</div>
          </div>
        )}
        {day['Performed tests'] !== undefined && (
          <div className="flex justify-between">
            <div>Performed tests</div>
            <div className="bg-green-800 px-2 rounded">{day['Performed tests']}</div>
          </div>
        )}
        {day['Daily positivity'] !== undefined && (
          <div className="flex justify-between">
            <div>Positivity rate</div>
            <div className="bg-neutral-700 px-2 rounded">{`${Number(day['Daily positivity'].toFixed(3))}%`}</div>
          </div>
        )}
      </div>
    );
  }

  return null;
};

interface ChartProps {
  data: RawGraphingData[];
}

const Chart = (props: ChartProps) => {
  const { data } = props;

  const [showPerformed, togglePerformed] = useState(true);
  const [showPositive, togglePositive] = useState(true);
  const [startIndex, setStartIndex] = useState(data.length - 31); // default to one month

  const days: GraphingData[] = data.map((day) => {
    const filteredDay: GraphingData = { date: day.date };
    if (showPerformed) filteredDay['Performed tests'] = day.performedTests;
    if (showPositive) filteredDay['Positive tests'] = day.positiveTests;
    return filteredDay;
  });

  return (
    <div className="mx-auto lg:w-4/5">
      <div className="flex justify-between m-4">
        <button type="button" onClick={() => togglePerformed(!showPerformed)}>
          {showPerformed && <p className="bg-green-800 px-3 py-1 text-white rounded-full shadow-inner shadow-green-900">🏥 performed tests</p>}
          {!showPerformed && <p className="bg-neutral-700 px-3 py-1 text-neutral-200 rounded-full shadow-inner shadow-neutral-600  grayscale">🏥 performed tests</p>}
        </button>
        <button type="button" onClick={() => togglePositive(!showPositive)}>
          {showPositive && <p className="bg-yellow-900 px-3 py-1 text-white rounded-full shadow-inner shadow-yellow-700">🌡 positive tests</p>}
          {!showPositive && <p className="bg-neutral-700 px-3 py-1 text-neutral-200 rounded-full shadow-inner shadow-neutral-600 grayscale">🌡 positive tests</p>}
        </button>
      </div>
      <ResponsiveContainer height={360}>
        <LineChart
          width={500}
          height={300}
          data={days}
          margin={{ bottom: 60, left: 20 }}
        >
          <CartesianGrid strokeDasharray="1 12" />
          <XAxis dataKey="date" tickMargin={30} minTickGap={26} stroke="#9da3a5" />
          <YAxis yAxisId="left" stroke="#9da3a5" />
          <YAxis yAxisId="right" orientation="right" stroke="#9da3a5" />
          <Tooltip labelStyle={{ color: '#161616' }} content={<InformationalTooltip active payload />} />
          {showPerformed && <Line yAxisId="left" type="monotone" dataKey="Performed tests" stroke="#4b7c14" dot={false} />}
          {showPositive && <Line yAxisId="right" type="monotone" dataKey="Positive tests" stroke="#9c6410" dot={false} />}
          <Brush fill="#1c1c1c" travellerWidth={12} y={310} startIndex={startIndex} dataKey="date" />
        </LineChart>
      </ResponsiveContainer>

      <section className="space-y-4 mx-3">
        <p className="text-neutral-400 italic text-center">drag the slider to specify a date range</p>

        <div className="max-w-sm mx-auto flex flex-wrap justify-between">
          <button type="button" onClick={() => setStartIndex(days.length - 8)}>
            <p className="bg-neutral-600 px-4 py-1 rounded-sm w-28 my-1">7 days</p>
          </button>
          <button type="button" onClick={() => setStartIndex(days.length - 31)}>
            <p className="bg-neutral-600 px-4 py-1 rounded-sm w-28 my-1">30 days</p>
          </button>
          <button type="button" onClick={() => setStartIndex(days.length - 91)}>
            <p className="bg-neutral-600 px-4 py-1 rounded-sm w-28 my-1">90 days</p>
          </button>
          <button type="button" onClick={() => setStartIndex(days.length - 181)}>
            <p className="bg-neutral-600 px-4 py-1 rounded-sm w-28 my-1">180 days</p>
          </button>
          <button type="button" onClick={() => setStartIndex(days.length - 366)}>
            <p className="bg-neutral-600 px-4 py-1 rounded-sm w-28 my-1">365 days</p>
          </button>
          <button type="button" onClick={() => setStartIndex(0)}>
            <p className="bg-neutral-600 px-4 py-1 rounded-sm w-28 my-1">all time</p>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Chart;
