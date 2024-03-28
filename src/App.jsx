import Footer from "./components/Footer.jsx"
import NavBar from "./components/NavBar.jsx"
import ItemListContainer from "./ItemListContainer.jsx"
//import Main from "./layout/Main.jsx"
import './App.css'

function App() {
 

  return (
    <>
    <NavBar/>
    <ItemListContainer greeting="Bienvenidos al E-Comerce Pim pollo." />
    <Footer/>
    </>
  )
}

export default App
