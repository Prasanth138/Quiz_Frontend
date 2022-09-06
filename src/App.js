import './App.css';
import CreateQuestion from './components/CreateQuestion';
import {Route,Routes} from 'react-router-dom';
import Navbar from './components/NavBar';
import EditQuestion from './components/EditQuestion';
import Card from './components/Cards';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Card/>}/>
        <Route path='/createQuestion' element={<CreateQuestion/>}/>
        <Route path='/editQuestion' element={<EditQuestion/>}/>
      </Routes>
    </div>
  );
}

export default App;
