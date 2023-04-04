import React, { useContext } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { ChartContext } from '../../../store/contexts';

export default function BarChart() {
  const { chartState } = useContext(ChartContext);
  const options = {
    title: {
      text: '人口數統計',
      style: {
        fontWeight: 400,
        fontSize: '26px',
      },
    },
    chart: {
      type: 'column',
      backgroundColor: 'rgba(255, 255, 255, 0)',
    },
    accessibility: {
      enabled: false,
    },
    xAxis: {
      categories: ['共同生活', '獨立生活'],
      title: {
        text: '型態',
        align: 'middle',
        margin: 10,
        style: {
          fontWeight: 500,
          fontSize: '20px',
        },
      },
      labels: {
        y: 20,
        style: {
          fontSize: '12px',
        },
      },
    },
    yAxis: {
      allowDecimals: false,
      title: {
        text: '數量',
        align: 'high',
        style: {
          fontWeight: 700,
          fontSize: '16px',
        },
        rotation: 0,
        y: -20,
        x: -12,
        offset: 0,
      },

      labels: {
        formatter(this: { value: number }): string | undefined {
          const { value } = this;
          if (value >= 1000) {
            return `${value / 1000}k`;
          }
          return value.toString();
        },
      },
    },
    series: [{
      data: chartState.barChart.dataMale,
      name: "<span style='font-weight: 400'>男性</span>",
      color: '#7D5FB2',
      dataLabels: {
        enabled: true,
        allowOverlap: true,
        style: {
          fontSize: '16px',
          fontWeight: 'bold',
        },
      },
    }, {
      data: chartState.barChart.dataFemale,
      name: "<span style='font-weight: 400'>女性</span>",
      color: '#C29FFF',
      dataLabels: {
        enabled: true,
        allowOverlap: true,
        style: {
          fontSize: '16px',
          fontWeight: 'bold',
        },
      },
    }],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 522,
          },
          chartOptions: {
            chart: {
              height: 500,
            },
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
            },
            labels: {
              style: {
                fontWeight: 100,
                fontSize: '12px',
              },
            },
            yAxis: {
              labels: {
                style: {
                  fontSize: '12px',
                },
              },
            },
          },
        },
      ],
    },

    credits: false,
  };
  return (
    <div className="w-full h-[610px] sm:h-[500px]">
      <HighchartsReact highcharts={Highcharts} options={options} containerProps={{ style: { height: '100%' } }} />
    </div>
  );
}
