import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
return (
    <nav className="NavBar">
        <Link to='/'>
        <h3>Ecommerce</h3>
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