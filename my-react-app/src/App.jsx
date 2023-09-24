import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'


const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <ItemListContainer bienvenida="¡Bienvenido a BlueWave!" />
    </div>
  )
}

export default App
