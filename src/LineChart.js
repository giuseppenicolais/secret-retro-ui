import React from 'react';
import Chart from "react-google-charts";

export default function LineChart({ data }) {
  return (
    <div>
      <Chart
        width={'600px'}
        height={'400px'}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={data}
        options={{
          hAxis: {
            title: 'Time',
          },
          vAxis: {
            title: 'Rating',
          },
          series: {
            1: { curveType: 'function' },
          },
        }}
        rootProps={{ 'data-testid': '2' }}
      />
    </div>
  );
}