import avatar from '/src/assets/icons_svg/Avatar.svg'
import './Avatar.scss'

const Avatar = () => {

  return (
    <button
      type="button"
      className="avatar"
      onClick={() => {}}
    >
      <img src={avatar} alt="Avatar" />
      <div className="avatar_status" />
    </button>
  )
}

export default Avatar
