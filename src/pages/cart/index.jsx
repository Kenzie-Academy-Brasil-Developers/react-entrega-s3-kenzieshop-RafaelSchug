import { useSelector, useDispatch } from "react-redux";
import { removeFromCartThunk } from "../../store/modules/cart/thunks";
import './style.css';

const Cart = () => {

    const {cart} = useSelector(state => state);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCartThunk(id))
    }

    return (
        <div className='cart__container'>
            <div className='cart__information'>
                <p>Quantidade de itens: {cart.reduce((acc, item)=> acc + item.quantity, 0)}</p>
                <p>Total: {(cart.reduce((acc, item)=> acc + (item.price * item.quantity), 0).toFixed(2))}</p>
            </div>
            {cart.map(({name, img, price, id, quantity},index)=> {
                return (
                    <div className='product__card' key={index}>
                        <img src={img} alt={name} />
                        <div className='product_info'>
                            <h4>{name}</h4>
                            <p>$ {price.toFixed(2)}</p>
                            <p>Quantidade: {quantity}</p>
                        </div>
                        <button onClick={() => handleRemoveFromCart(id)}>Remover do Carrinho</button>
                    </div>
                )
            })}
        </div> 
    )
}

export default Cart;