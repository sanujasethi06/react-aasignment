import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { CategoryScale, Chart } from "chart.js/auto";
import './Charts.css'
Chart.register(CategoryScale);
const Charts = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Sales',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                backgroundColor: 'rgb(75, 192, 192)',
                borderColor: 'rgba(75, 192, 192, 0.2)',
            },
        ],
    };

    const barData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Revenue',
                data: [30, 20, 50, 40, 60, 80, 70],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="charts-container">
            <h2>Charts</h2>
            <div className="chart">
                <Line data={data} />
            </div>
            <div className="chart">
                <Bar data={barData} />
            </div>
        </div>
    );
};

export default Charts;
