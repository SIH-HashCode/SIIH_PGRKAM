import React, { useEffect } from 'react';
import Chart from 'react-apexcharts';

const UserActivity = () => {
    useEffect(() => {
            const options = {
                    series: [
                        { name: 'No. of views', type: 'column', data: [230, 110, 220, 270, 130, 220, 370, 210, 440, 220, 300], color: '#0076F4' },
                        { name: 'No. of viewers', type: 'area', data: [440, 550, 410, 670, 220, 430, 210, 410, 560, 270, 430] },
                        { name: 'Average visit time', type: 'line', data: [300, 250, 360, 300, 450, 350, 640, 520, 590, 360, 390] },
                    ],
                    chart: { height: 350, type: 'line', stacked: false },
                    stroke: { width: [0, 2, 4], curve: 'smooth', colors: ['#007BFF'] }, // Blue stroke for line graph
                    plotOptions: {
                        bar: {
                            columnWidth: '10%',
                            borderRadius: 6,
                        },
                    },
                    fill: {
                        type: 'gradient',
                        colors: ['#FFF285'],
                        gradient: {
                            shade: 'light',
                            type: 'horizontal',
                            shadeIntensity: 0.25,
                            gradientToColors: ['#DDD', '#DDD', '#DDD', '#DDD', '#DDD', '#DDD', '#DDD', '#DDD', '#DDD', '#DDD', '#DDD'],
                            inverseColors: false,
                            opacityFrom: 1,
                            opacityTo: 0.75,
                            stops: [0, 100],
                        },
                    },
                
            xaxis: {
              type: 'datetime',
              categories: [
                new Date('2000-01-01T06:00:00Z').getTime(),
                new Date('2000-01-01T07:00:00Z').getTime(),
                new Date('2000-01-01T08:00:00Z').getTime(),
                new Date('2000-01-01T09:00:00Z').getTime(),
                new Date('2000-01-01T10:00:00Z').getTime(),
                new Date('2000-01-01T11:00:00Z').getTime(),
                new Date('2000-01-01T12:00:00Z').getTime(),
                new Date('2000-01-01T13:00:00Z').getTime(),
                new Date('2000-01-01T14:00:00Z').getTime(),
                new Date('2000-01-01T15:00:00Z').getTime(),
                new Date('2000-01-01T16:00:00Z').getTime(),
              ],
            },
            yaxis: { title: { text: 'Values' }, min: 100, max: 900, tickAmount: 9 },
            tooltip: {
              shared: true,
              intersect: false,
              y: {
                formatter: function (y) {
                  if (typeof y !== 'undefined') {
                    return y.toFixed(0);
                  }
                  return y;
                },
              },
            },
          };
      
          const chart = new ApexCharts(document.querySelector('#chart'), options);
          chart.render();
      
          return () => {
            chart.destroy();
          };
        }, []);
      return (
        <div id="chart">
        </div>
      );
    };

export default UserActivity
