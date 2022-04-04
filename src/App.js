import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import SingleCocktail from './pages/SingleCocktail';
import Error from './pages/Error';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/about' element={<About />}/>
      <Route path='/cocktail/:id' element={<SingleCocktail />}/>
      <Route path='*' element={<Error />}/>
    </Routes>
    </>
  );
}

export default App;
