
import './Dashboard.scss'
import SideBar from '../sideBar/SideBar'
import TopBar from '../topBar/TopBar'
import VisualPollution from '../contents/VisualPollution'

const Dashboard = () => {

  return (
    <div className="dashboard">
      <SideBar />
      <div className="dashboard_wrapper">
        <TopBar />
        <section className="dashboard_content">
          <div className="dashboard_content_bgLogo" />
          <VisualPollution />
        </section>
      </div>
    </div>
  )
}

export default Dashboard
