// src/components/common/SpreadChart.jsx

import React, { useState } from 'react';
import ReactECharts from 'echarts-for-react';

const SpreadChart = () => {
  const [activeTab, setActiveTab] = useState('EUR/USD');

  const tabData = {
    'EUR/USD': [0.04, 0.04, 0.035, 0.03, 0.02, 0.01, 0.005],
    'GBP/USD': [0.03, 0.035, 0.032, 0.028, 0.02, 0.01, 0.005],
    'XAU/USD': [0.05, 0.045, 0.042, 0.04, 0.035, 0.03, 0.025],
  };

  const option = {
    grid: {
      left: '3%',
      right: '4%',
      bottom: '8%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: ['Jun 22', '', '', '', '', '', 'Aug 21'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: tabData[activeTab],
        type: 'line',
        areaStyle: {
          color: '#ffe7e2',
        },
        lineStyle: {
          color: '#f34d2d',
        },
        symbol: 'none',
        name: 'Advantage MT4',
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };

  return (
    <section className="bg-white text-center py-14 px-4 sm:px-8 md:px-20">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Unbeatable trading costs
      </h2>
      <p className="text-sm md:text-base text-gray-700 max-w-3xl mx-auto mb-2">
        We typically offer spreads close to zero on the FX majors including EURUSD and GBPUSD, and spreads as low as zero on gold.
      </p>
      <h3 className="text-lg mt-4 mb-1 font-medium">
        Average spreads on our most popular markets
      </h3>
      <p className="text-sm italic text-gray-600 mb-6">
        (Market times: 07:00 – 21:00, GMT+2)
      </p>

      {/* Tabs */}
      <div className="flex justify-center space-x-6 mb-6 text-sm sm:text-base">
        {['EUR/USD', 'GBP/USD', 'XAU/USD'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-1 border-b-2 transition ${
              activeTab === tab
                ? 'border-gray-700 font-semibold text-black'
                : 'border-transparent text-gray-500 hover:text-black'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Chart */}
      <div className="bg-white shadow-lg rounded-xl p-4 overflow-hidden">
        <ReactECharts option={option} style={{ height: '300px', width: '100%' }} />
      </div>
    </section>
  );
};

export default SpreadChart;
