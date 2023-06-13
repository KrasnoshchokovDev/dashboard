import settingsBarList from '../../configs/topBarSettings'

import './TopBar.scss'
import Avatar from '../avatar/Avatar'

const TopBar = () => {

  return (
    <div className="topBar">

      <button
        type="button"
        className="topBar_icons topBar_menuBtn"
        onClick={() => {}}
      />

      <div className="topBar_infoBar">
        <div className="topBar_infoBar_icon" />
        <h6 className="topBar_infoBar_title">Visual pollution</h6>

        <div className="topBar_infoBar_path">
          <span className="topBar_infoBar_text topBar_infoBar_text__dark">Main</span>
          <span className="topBar_infoBar_text topBar_infoBar_text__gray">/</span>
          <span className="topBar_infoBar_text topBar_infoBar_text__dark">Visual pollution</span>
          <span className="topBar_infoBar_text topBar_infoBar_text__gray">/</span>
          <span className="topBar_infoBar_text topBar_infoBar_text__gray">Amanah Profiling</span>
        </div>
      </div>

      <div className="topBar_settingsBar">
        {settingsBarList.map((item) => (
          <button
            key={item}
            type="button"
            className={`topBar_icons topBar_settingsBar_${item}`}
            onClick={() => {}}
          />
        ))}

        <Avatar />
      </div>
    </div>
  )
}

export default TopBar
