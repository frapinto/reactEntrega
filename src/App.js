import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={ <ItemListContainer/> }/>
        <Route exact path='/categoria/:categoriaId' element={ <ItemListContainer/> }/>
        <Route exact path='/detail/:id' element={ <ItemDetailContainer/> }/>  
      </Routes>      
  </Router>
  );
}
 
export default App;
