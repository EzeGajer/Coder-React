import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About'; 
import NotFound from './pages/NotFound'; 

const App = () => {
  return (
    <Router>
      <div>
        <NavBar></NavBar>
        <ItemListContainer bienvenida="¡Bienvenido a BlueWave!" />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App;

