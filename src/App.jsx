import logo from './img/TuZonaGamer.svg'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  /*const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
  };*/

  return (
    <>
    <div className='App'>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer className="greeting" greeting={'¡Bienvenido a Tu Zona Gamer!'}/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer className="greeting" greeting={'¡Bienvenido a Tu Zona Gamer!'}/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
      </Routes>
      </BrowserRouter>
    </div>

    {/*<ItemDetailContainer/>
    
    <div>
      <img className='logo' src={logo} alt="Logo"/>
    </div>

      <h2>Aquí econtrarás los mejores videojuegos para consola y PC:</h2>
      <br/>

        <p>
          Recibe noticias sobre los próximos juegos:
        </p>
        <div>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </label>
          <br />
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br />
          <button type="submit">Enviar</button>
        </form>
        </div>
  
      
      <p className="read-the-docs">
        Ecommerce creado por Ana Ruiz Aragón
      </p>
      */}
    </>
  )
}

export default App
