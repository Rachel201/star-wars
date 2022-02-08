import logo from './logo.svg';
import './App.css';
import {getPerson} from './api/person'

async function App() {
  const fetchApiData =await getPerson();

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
