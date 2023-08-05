import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout';

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
      <CartProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer className="greeting" greeting={'¡Bienvenido a Tu Zona Gamer!'}/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer className="greeting" greeting={'¡Bienvenido a Tu Zona Gamer!'}/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
      </Routes>
      </CartProvider>
      </BrowserRouter>
    </div>

    {/*<ItemDetailContainer/>
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
