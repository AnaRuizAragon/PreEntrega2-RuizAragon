import logo from './img/TuZonaGamer.svg'
import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  const [count, setCount] = useState(0)
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
    <NavBar/>
    <ItemListContainer className="greeting" greeting={'¡Bienvenido a Tu Zona Gamer!'}/>
    <div>
      <img className='logo' src={logo} alt="Logo"/>
    </div>

      <h2>Aquí econtrarás los mejores videojuegos para consola y PC:</h2>
      <br/>

      <h3>Consola</h3>
      <div>
        <div className="card">
        <img className='producto' src="./src/img/evil west.webp" alt="Evil West"/>
        <p>Evil West</p>
        </div>
        <button onClick={() => setCount((count) => count + 1)}>
          Agregar al carrito {count}
        </button>
        <div/>
        
        <div className="card">
        <img className='producto' src="./src/img/sonic.webp" alt="Sonic Frontiers"/>
        <p>Sonic Frontiers</p>
        <button onClick={() => alert("Sin Stock")}>
        Agregar al carrito {0}
        </button>
        </div>

        <div className="card">
        <img className='producto' src="./src/img/dreamlight.webp" alt="Dreamlighy Valley"/>
        <p>Dreamlighy Valley</p>
        <button onClick={() => setCount((count) => count + 1)}>
          Agregar al carrito {count}
        </button>
        </div>

        <div className="card">
        <img className='producto' src="./src/img/valkyrie.webp" alt="Valkirye"/>
        <p>Valkirye</p>
        <button onClick={() => setCount((count) => count + 1)}>
        Agregar al carrito {count}
        </button>
        </div>
      </div>
      <br/>

      <h3>PC</h3>
      <div>
        <div className="card">
        <img className='producto' src="./src/img/inscryption.webp" alt="Inscryption"/>
        <p>Inscryption</p>
        <button onClick={() => setCount((count) => count + 1)}>
        Agregar al carrito {count}
        </button>
        </div>

        <div className="card">
        <img className='producto' src="./src/img/kena.webp" alt="Kena: Bridge of Spirits"/>
        <p>Kena: Bridge of Spirits</p>
        <button onClick={() => setCount((count) => count + 1)}>
        Agregar al carrito {count}
        </button>
        </div>

        <div className="card">
        <img className='producto' src="./src/img/tunic.webp" alt="Tunic"/>
        <p>Tunic</p>
        <button onClick={() => setCount((count) => count + 1)}>
        Agregar al carrito {count}
        </button>
        </div>

        <div className="card">
        <img className='producto' src="./src/img/we are ofk.webp" alt="OFK"/>
        <p>OFK</p>
        <button onClick={() => setCount((count) => count + 1)}>
        Agregar al carrito {count}
        </button>
        </div>
      </div>

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

    </>
  )
}

export default App
