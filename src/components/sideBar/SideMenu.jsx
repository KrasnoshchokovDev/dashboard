import { useEffect, useState } from 'react'

import sideBarConfig from '../../configs/sideBarConfig'

import './SideBar.scss'

const SideBarMenu = () => {
  const [activeMenu, setActiveMenu] = useState('')

  const handleMenu = (event) => {
    event.stopPropagation();

    const value = event.currentTarget.id
    setActiveMenu(value)
  }

  useEffect(() => {
    if (!activeMenu) {
      setActiveMenu(sideBarConfig[0].title)
    }
  }, [activeMenu])

  return (
    <nav className="sideBar_menu">
      <ul>
        {sideBarConfig.map((item) => (
          <li
            key={item.title}
            className={`sideBar_menu_item ${
              activeMenu === item.title ? 'sideBar_menu_item__active' : ''
            }`}
          >
            {item.isActive ? (
              <button
                id={item.title}
                type="button"
                className='sideBar_menu_btn'
                onClick={handleMenu}
              >
                <img
                  src={activeMenu === item.title ? item.icon_active : item.icon}
                  alt={item.title}
                  className="sideBar_menu_icon"
                />
              </button>
            ) : (
              <div
                id={item.title}
                className='sideBar_menu_btn'
              >
                <img
                  src={activeMenu === item.title ? item.icon_active : item.icon}
                  alt={item.title}
                  className="sideBar_menu_icon sideBar_menu_icon__inactive"
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default SideBarMenu
