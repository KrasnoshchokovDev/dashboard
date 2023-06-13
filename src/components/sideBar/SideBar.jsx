import Logo from '../logo/Logo'

import './SideBar.scss'
import SideBarMenu from './SideMenu'

const SideBar = () => {

  return (
    <aside className="sideBar">

      <div className="sideBar_logo">
        <Logo />
      </div>

      <SideBarMenu />

    </aside>
  )
}

export default SideBar
