import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ItemListConteiner } from './components/ItemsListConteiner/ItemsListConteiners';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <Router>
      <h1 className="fw-bold text-center p-5">Ecommerce</h1>
      <Routes>
        <Route path='/' element={<ItemListConteiner/>}/>
        <Route path='/detail/:pid' element={<ItemDetailContainer/>}/>
      </Routes>
    </Router>
  );
}

export default App;
