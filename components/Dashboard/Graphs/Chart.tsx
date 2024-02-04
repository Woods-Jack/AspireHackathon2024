"use client"
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const ChartComponent = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://python-backend-kappa.vercel.app/api/google_trends/genAI');
        const data = await response.json();
        const rawData = JSON.parse(data.data);

        // Parse the inner JSON string
        const innerData = JSON.parse(rawData.data);

        const genAI = innerData.genAI;
        const seriesData = Object.keys(genAI).map(timestamp => ({
          x: parseInt(timestamp),
          y: genAI[timestamp]
        }));

        setChartData([{ name: 'genAI', data: seriesData }]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const options = {
    chart: {
      id: 'apexchart-example'
    },
    xaxis: {
      type: 'datetime',
      categories: chartData ? chartData[0].data.map(point => new Date(point.x)) : []
    }
  };

  return (
    <Chart options={options} series={chartData} type="line" width={500} height={320} />
  );
};

export default ChartComponent

