import { useSelector, useDispatch } from "react-redux";
import { removeFromCartThunk } from "../../store/modules/cart/thunks";

const Cart = () => {

    const {cart} = useSelector(state => state);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCartThunk(id))
    }

    return (
        <div className='cart__container'>
            {cart.map(({name, img, price, id},index)=> {
                return (
                    <div className='product__card' key={index}>
                        <img src={img} alt={name} />
                        <div className='product_info'>
                            <h4>{name}</h4>
                            <p>$ {price.toFixed(2)}</p>
                        </div>
                        <button onClick={() => handleRemoveFromCart(id)}>Remover do Carrinho</button>
                    </div>
                )
            })}
        </div> 
    )
}

export default Cart;