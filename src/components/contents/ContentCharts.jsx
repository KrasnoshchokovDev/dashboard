import React from 'react'

import chartsConfigs from '../../configs/chartsConfigs'
import Chart from './Chart'
import './contents.scss'

const ContentCharts = () => {

  return (
    <div className="contentCharts">
      {chartsConfigs.map((item) => (
        <React.Fragment key={item.id}>
          <Chart chartConfig={item} />
        </React.Fragment>
      ))}
    </div>
  )
}

export default ContentCharts
