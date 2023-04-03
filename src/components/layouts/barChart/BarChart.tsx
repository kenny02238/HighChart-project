import React, { useContext } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { ChartContext } from '../../../store/contexts';

export default function BarChart() {
  const { chartState } = useContext(ChartContext);
  const options = {
    title: {
      text: "<span style='font-weight: 700;font-size: 26px'>人口數統計</span>",
    },
    data: {
      table: 'datatable',
    },
    chart: {
      type: 'column',
    },
    xAxis: {
      categories: ['共同生活', '獨立生活'],
    },
    yAxis: {
      allowDecimals: false,
      title: {
        text: "<span style='font-weight: 700'>數量</span>",
        align: 'high',
        rotation: 0,
        y: -20,
        x: 35,
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
    }, {
      data: chartState.barChart.dataFemale,
      name: "<span style='font-weight: 400'>女性</span>",
      color: '#C29FFF',
    }],
    credits: false,
  };
  return (
    <div className="w-full">
      <HighchartsReact highcharts={Highcharts} options={options} containerProps={{ style: { height: '600px' } }} />
    </div>
  );
}
