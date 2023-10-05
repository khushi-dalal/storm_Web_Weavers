import React, { PureComponent } from 'react';
import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'January',
    avg: 2.6,
  },
  {
    name: 'Febuary',
    avg: 3.8,
  },
  {
    name: 'March',
    avg: 3.7,
  },
  {
    name: 'April',
    avg: 4.8,
  },
  {
    name: 'May',
    avg: 4.5,
  },
  {
    name: 'June',
    avg: 4.3,
  },
  {
    name: 'July',
    avg: 4.2,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

  render() {
    // Create an array of labels for the Y-axis
    const yLabels = ['1', '2', '3', '4', '5'];

    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          YAxiswidth={40}
          XAxisheight={40}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis ticks={yLabels} /> {/* Set custom ticks */}
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="avg" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}