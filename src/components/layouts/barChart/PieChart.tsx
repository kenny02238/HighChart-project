import React, { useContext } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { ChartContext } from '../../../store/contexts';

interface ConnectorPosition {
  touchingSliceAt: {
    x: number;
    y: number;
    radius: number;
    start: number;
    end: number;
  };
}

interface LabelPosition {
  x: number;
  y: number;
}

function PieChart() {
  const { chartState } = useContext(ChartContext);
  const data = [
    {
      name: '共同生活',
      y: chartState.pieChart.common,
    },
    {
      name: '獨立生活',
      y: chartState.pieChart.alone,
    },
  ];

  const options = {
    title: {
      text: '戶數統計',
      style: {
        fontWeight: 400,
        fontSize: '26px',
      },
      margin: 15,
    },
    chart: {
      type: 'pie',
    },
    accessibility: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        colors: ['#626EB2', '#A3B1FF'],
        showInLegend: true,
        size: '100%',
        dataLabels: {
          enabled: true,
          format: '{point.percentage:.2f} %',
          connectorWidth: 1.2,
          connectorShape(
            labelPosition: LabelPosition,
            connectorPosition: ConnectorPosition,
          ) {
            const startX = connectorPosition.touchingSliceAt.x;
            const startY = connectorPosition.touchingSliceAt.y;
            const endX = labelPosition.x;
            const endY = labelPosition.y;
            const controlX = (startX + endX) / 2;
            const controlY = (startY + endY) / 2 + 8;

            const pathData = [
              'M', startX, startY,
              'Q', controlX, controlY, endX, endY,
            ];
            return pathData;
          },
          style: {
            fontSize: '14px',
          },
        },
      },
    },

    series: [
      {
        name: '戶數',
        colorByPoint: true,
        data,
        dataLabels: {
          distance: 20, // Individual distance (in px)
        },
      },
    ],
    legend: {
      itemStyle: {
        fontSize: '12px',
        fontWeight: 'normal',
      },
      symbolWidth: 10,
      symbolHeight: 10,
    },
    responsive: {
      rules: [{
        condition: {
          maxWidth: 600,
        },
        chartOptions: {
          plotOptions: {
            pie: {
              size: '65%',
            },
          },
        },
      }],
    },
    credits: false,
  };

  return (
    <div className="h-[600px] lg:h-[350px]">
      <HighchartsReact highcharts={Highcharts} options={options} containerProps={{ style: { height: '100%' } }} />
    </div>
  );
}

export default PieChart;
