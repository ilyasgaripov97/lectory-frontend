import './Header.css'

const Header = ({ titleText }) => {
  return (
    <div className="header">
      <h1 className="header__title">{titleText}</h1>
    </div>
  )
}

export default Header
