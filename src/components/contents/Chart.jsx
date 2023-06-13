import { PropTypes } from 'prop-types'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar, Scatter } from 'react-chartjs-2'

import './contents.scss'
import ChartWithDescription from './ChartWithDescription'

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const Chart = (props) => {
  const { chartConfig } = props;
  const { title, chart } = chartConfig;
  console.log(chartConfig)

  return (
    <div className="chart">
      {title && (
        <h4 className="chart_title info_icon">
          {title}
        </h4>
      )}
      <div className="chart_graphBox">
        {chart.type === 'doughnut' ? (
          <ChartWithDescription chartConfig={chartConfig} />
        ) : (
          <>
            {chart.title && (
              <p className="chart_graphTitle">{chart.title}</p>
            )}
            {chart.isLegend && (
              <div className="chart_graph_legends">
                {chart.data.datasets.map((item) => (
                  <span
                    key={item.label}
                    className={`chart_graph_legends_text chart_graph_legends_text__${
                      item.backgroundColor.substring(1, 10)
                    }`}
                  >
                    {item.label}
                  </span>
                ))}
              </div>
            )}
            <div className="chart_graph">
              {chart.type === 'bar' && (
                <Bar
                  options={chart.options}
                  data={chart.data}
                  width={100}
                  height={100}
                />
              )}
              {chart.type === 'scatter' && (
                <Scatter
                  options={chart.options}
                  data={chart.data}
                  width={100}
                  height={100}
                />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

Chart.propTypes = {
  chartConfig: PropTypes.any,
}

export default Chart
