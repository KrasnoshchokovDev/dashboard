
import './contents.scss'

const ContentHeader = () => {

  return (
    <div className="contentHeader">
      <div className="contentHeader_block">
        <h3 className="contentHeader_title info_icon">
          Enforcement performance
        </h3>
        <div className="contentHeader_selector">
          Riyadh
        </div>
      </div>

      <div className="contentHeader_dropMenu">
        <span className="contentHeader_dropMenu_text">
          Previous month
        </span>
      </div>
    </div>
  )
}

export default ContentHeader
