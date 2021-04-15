import './Home.css';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import Feed from './Feed/Feed';
import Sidebar from '../Sidebar/Sidebar';
import Menu from '../Menu/Menu'



const Home = () => {

  return(
    <div className="wrapper">
      <Card>
        <Menu />
      </Card>
      <main className="content">
        <Card className="feed-wrapper" margin={"small"}>
          <main>
            <Feed />
          </main>
        </Card>
        <Card className="sidebar-wrapper" margin={"small"}>
          <Sidebar />
        </Card>
      </main>
    </div>  
  )
}

export default Home;