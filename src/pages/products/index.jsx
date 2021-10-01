import { useSelector, useDispatch } from "react-redux";
import {addToCartThunk} from "../../store/modules/cart/thunks";
import './style.css'

const Products = () => {

    const {products, cart} = useSelector(state => state);
    const dispatch = useDispatch();

    const handleAddtoCart = (prod_id) => {
        dispatch(addToCartThunk(products.find(item => item.id === prod_id)))
        
    }
    console.log(cart);
    return (
        <div className='products__container'>
            {products.map(({name, img, price, id, onSale, discount}, index) => {
                return (
                    <div className='product__card' key={index}>
                        {onSale && <span className='onsale_tag'>{Math.round((discount / price * 100))}% OFF</span>}
                        <img src={img} alt={name} />
                        <div className='name_desc'>
                            <h4>{name}</h4>
                        </div>
                        <div className='price_desc'>
                                {onSale ? (
                                    <>
                                        <p className='lined-through'>{price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                                        <p>{(price - discount).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                                    </>
                                ) : (
                                    <p>{price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                                )}
                                </div>
                        <button onClick={() => handleAddtoCart(id)}>Adicionar ao carrinho</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Products;