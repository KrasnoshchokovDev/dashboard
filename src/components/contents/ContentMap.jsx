
import './contents.scss'

const ContentMap = () => {

  return (
    <div className="contentMap">
      <div className="contentMap_titles">
        <span className="contentMap_titles_item contentMap_titles_item__low">
          Low
        </span>
        <span className="contentMap_titles_item contentMap_titles_item__average">
          Average
        </span>
        <span className="contentMap_titles_item contentMap_titles_item__good">
          Good
        </span>
      </div>
      <div className="contentMap_map" />
      <div className="contentMap_point" />
      <div className="contentMap_zoom">
        <button
          type="button"
          className="contentMap_zoom__plus"
          onClick={() => {}}
        />
        <button
          type="button"
          className="contentMap_zoom__minus"
          onClick={() => {}}
        />
      </div>
    </div>
  )
}

export default ContentMap
