"use client";

import React from 'react';
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const ChartComponent = () => {
  const options = {
    chart: {
      id: 'apexchart-example'
    },
    xaxis: {
      categories: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
    }
  };
  
  const series = [{
    name: 'series-1',
    data: [40.5, 45, 46, 30, 55, 60, 70, 91, 125]
  }];
  
  return (
    <Chart options={options} series={series} type="line" width={500} height={320} />
  );
};

export default ChartComponent;
