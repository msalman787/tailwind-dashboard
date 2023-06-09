import React from 'react'
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
export const BarChart = () => {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June'];
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top' as const,
          },
          title:{
            display:true,
            text:"Daily Revenue"

          }
        },

      };
    const data = {
        labels,
        datasets: [
            {
                label: 'Sales data',
                data: [109,534,678,458,100,789],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.4)',
            },
        ],
      };
  return (
    <>
        <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
            <Bar
             options={options}
             data={data}
            />
        </div>
    </>
  )
}
