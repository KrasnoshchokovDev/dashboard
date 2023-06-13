import { PropTypes } from 'prop-types'

import './contents.scss'

const ChartWithDescription = (props) => {
  const { chartConfig } = props;
  const { chart, description } = chartConfig;

  return (
    <div className="chart_row">
      <div className="chart_graph_doughnut">
        {chart.title && (
          <p className="chart_graphTitle">{chart.title}</p>
        )}

        <div className="chart_graph_doughnut__graph" />

        <div className="chart_graph_doughnut_legends">
          {chart.data.datasets.map((item) => (
            <span
              key={item.label}
              className={`chart_graph_doughnut_legends_text chart_graph_doughnut_legends_text__${
                item.backgroundColor.substring(1, 10)
              }`}
            >
              {item.label}
            </span>
          ))}
        </div>
      </div>
      <div className="chart_description">
        <p className="chart_graphTitle">{description.title}</p>
        <ul className="chart_description_list">
          {description.points.map((text, index) => (
            <li key={index + 5}className="chart_description_item">
              <div dangerouslySetInnerHTML={{__html: text}}></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

ChartWithDescription.propTypes = {
  chartConfig: PropTypes.any,
}

export default ChartWithDescription
