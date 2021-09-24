/* eslint-disable react/react-in-jsx-scope */
import {
  LineChart, Line, CartesianGrid, YAxis, XAxis,
} from 'recharts';

export const Charts = () => {
  const data = [{
    name: 'Page A', uv: 400, pv: 2400, amt: 2400,
  }];
    <>
      <LineChart width={500} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
      </LineChart>
    </>;
};
