import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ItemListContainer } from './components/ItemsListContainer/ItemsListContainers';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainerMocks } from './components/ItemsListContainer/ItemsListContainersMocks';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/detail/:pid' element={<ItemDetailContainer/>}/>
        <Route path='/mocks' element={<ItemListContainerMocks/>}/>
      </Routes>
    </Router>
  );
}

export default App;