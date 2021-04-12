import './Menu.css'

import { Link } from 'react-router-dom'

import profileImage from '../../assets/images/profile.png'

const Menu = () => {
  return (
    <div>
      <header className="header">
        <h2>Лекторий</h2>
        <nav className="navbar">
          <Link className="navbar__link" to="/streams">Трансляции</Link>
          <Link className="navbar__link" to="/materials">Материалы</Link>
          <Link className="navbar__link profile-link" to="/profile">Профиль <img src={profileImage}></img></Link>
        </nav>
      </header>
    </div>
  )
}

export default Menu