
import './contents.scss'
import ContentHeader from './ContentHeader'
import ContentMap from './ContentMap'
import ContentCharts from './ContentCharts'

const VisualPollution = () => {

  return (
    <div className="visualPollution">
      <ContentHeader />
      <div className="visualPollution_block">
        <ContentMap />
        <ContentCharts />
      </div>
    </div>
  )
}

export default VisualPollution
