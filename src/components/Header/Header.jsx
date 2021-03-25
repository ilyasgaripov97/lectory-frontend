import './Header.css'


const Header = ({ titleText, hasMargin=true }) => {

  let className = "header";

  className += hasMargin ? " header__m-default" : "";
  
  return (
    <div className={className}>
      <h1 className="header__title">{titleText}</h1>
    </div>
  )
}

export default Header
