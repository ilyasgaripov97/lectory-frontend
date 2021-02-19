import logo from '../assets/images/logo.png'

import './Logo.css'

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="Logo"/>
      <h5 className="logo__text">Лекторий</h5>
    </div>
  )
}

export default Logo
