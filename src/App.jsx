
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import './App.css';
import PokemonDetail from './components/NewPage';
import MainContent from './components/mainPage';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<MainContent></MainContent>}></Route>
          <Route path='/pokemon/:id' element={<PokemonDetail/>} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

