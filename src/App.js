import './App.css';

import Card from './components/Card';


function App() {
  return (
    <div className="App container">
      <Card titleText={"Добро пожаловать!"} withLogo={true}/>
    </div>
  );
}

export default App;
