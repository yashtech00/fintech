import React from 'react';
import Chart from 'react-google-charts';

const ChartData = [
  [
    { type: 'string', label: 'Task ID' },
    { type: 'string', label: 'Task Name' },
    { type: 'date', label: 'Start Date' },
    { type: 'date', label: 'End Date' },
    { type: 'number', label: 'Duration' },
    { type: 'number', label: 'Percent Complete' },
    { type: 'string', label: 'Dependencies' },
  ],
  [
    'Utkarsh FD 1',
    'Utkarsh FD 1',
    new Date(2024, 0, 1),
    new Date(2024, 11, 31),
    null,
    100,
    null,
  ],
  [
    'Shriram FD Plan 2',
    'Shriram FD Plan 2',
    new Date(2024, 4, 1),
    new Date(2025, 3, 30),
    null,
    100,
    null,
  ],
  [
    'Bajaj Finserv FD 1',
    'Bajaj Finserv FD 1',
    new Date(2025, 0, 1),
    new Date(2025, 11, 31),
    null,
    100,
    null,
  ],
  [
    'Mahindra FD Plan 2',
    'Mahindra FD Plan 2',
    new Date(2025, 4, 1),
    new Date(2026, 3, 30),
    null,
    100,
    null,
  ],
];

const timeline = () => {
  return (
    <div className="container bg-white border-1 rounded-lg p-4">
      <div className="p-2 font-bold text-xl">FD Maturity Timeline</div>
      <Chart
        width={'100%'}
        height={'250px'}
        chartType="Gantt"
        loader={<div>Loading Chart</div>}
        data={ChartData}
      />
    </div>
  );
};

export default timeline;
