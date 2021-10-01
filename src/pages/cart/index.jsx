import { useSelector, useDispatch } from "react-redux";
import { removeFromCartThunk, performCheckoutThunk } from "../../store/modules/cart/thunks";
import {GrCart} from 'react-icons/gr';
import './style.css';

const Cart = () => {

    const {cart} = useSelector(state => state);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCartThunk(id))
    }

    const handleCheckout = () => {
        dispatch(performCheckoutThunk());
    }

    return (
        <div className='cart__container'>
            <div className='cart__information'>
                <p><GrCart/> Quantidade de itens: {cart.reduce((acc, item)=> acc + item.quantity, 0)}</p>
                <p>Total: {(cart.reduce((acc, item)=> acc + ((item.price - item.discount)* item.quantity), 0).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}))}</p>
                {cart.length > 0 && (
                    <div className='checkout'>
                        <button onClick={handleCheckout}>Finalizar Compra</button>
                    </div>
                )}
            </div>
            
            {cart.length > 0 ? (
                cart.map(({name, img, price, id, quantity, onSale, discount},index)=> {
                    return (
                        <div className='product__card' key={index}>
                            <img src={img} alt={name} />
                            <div className='product_info'>
                                <h4>{name}</h4>
                                {onSale ? (
                                    <>
                                        <p className='lined-through'>{price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                                        <p>{(price - discount).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                                    </>
                                ) : (
                                    <p>{price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                                )}
                                <p>Quantidade: {quantity}</p>
                            </div>
                            <button onClick={() => handleRemoveFromCart(id)}>Remover</button>
                        </div>
                    )
                })
            ) : <div className='empty__cart'><GrCart/></div> }
        </div> 
    )
}

export default Cart;