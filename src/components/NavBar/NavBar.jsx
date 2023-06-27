import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
return (
    <nav>
        <h3>Ecommerce</h3>
            <div>
                <button>Consola</button>
                <button>PC</button>
            </div>
            <CartWidget  />
    </nav>
)
}

export default NavBar