import cart from './assets/cart.svg'

const CartWidget = () => {
    return (
        <div>
            <img className='cart' src={cart} alt="cart-widget"/>
            0
        </div>
    )
}

export default CartWidget