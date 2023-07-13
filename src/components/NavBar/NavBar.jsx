import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from 'react-router-dom'
import logo from '../../img/TuZonaGamer.svg'

const NavBar = () => {
return (
    <nav className="NavBar">
        <Link to='/'>
        <img className='logo' src={logo} alt="Logo"/>
        </Link>
        
            <div className="Categories">
                <NavLink to={`/category/Consola`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Consola</NavLink>
                <NavLink to={`/category/PC`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>PC</NavLink>
            </div>
            <CartWidget  />
    </nav>
)
}

export default NavBar