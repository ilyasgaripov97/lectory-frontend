import './Home.css';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import Feed from './Feed/Feed';
import Sidebar from '../Sidebar/Sidebar';


import profileImage from '../../assets/images/profile.png'


const Home = () => {

  return(
    <div className="wrapper">
      <Card margin="small">
        <header className="header">
          <h2>Лекторий</h2>
          <nav className="navbar">
            <Link className="navbar__link" to="/streams">Трансляции</Link>
            <Link className="navbar__link" to="/materials">Материалы</Link>
            <Link className="navbar__link profile-link" to="/profile">Профиль <img src={profileImage}></img></Link>
          </nav>
        </header>

      </Card>
      <main className="content">
        <Card margin={"small"}>
          <main>
            <Feed/>
          </main>
        </Card>
        <Card margin={"small"}>
          <Sidebar />
        </Card>
      </main>
      
    </div>  
  )
}

export default Home;