import './Home.css';
import Card from '../Card/Card';
import Feed from './Feed/Feed';
import Sidebar from '../Sidebar/Sidebar';
import Menu from '../Menu/Menu'

import parseJwt from '../../utils/jwt';

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';



const Home = () => {

  const [materials, setMaterials] = useState([]);

  // TODO move fetch request into seaparate file, because it used in many places
  useEffect(async () => {
    const id_user = parseJwt(localStorage.getItem('token')).id_user;
    const response = await fetch(`http://localhost:8000/user/${id_user}/materials`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const json = await response.json();
    setMaterials(json.data)
  }, [])

  return(
    <div className="wrapper">
      <Card>
        <Menu />
      </Card>
      <main className="content">
        <Card className="feed-wrapper" margin={"small"}>
          <main>
            <Feed materials={materials} setMaterials={setMaterials}/>
          </main>
        </Card>
        <Card className="sidebar-wrapper" margin={"small"}>
          <Sidebar materials={materials} setMaterials={setMaterials}/>
        </Card>
      </main>
    </div>  
  )
}

export default Home;