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
            {products.map(({name, img, price, id}, index) => {
                return (
                    <div className='product__card' key={index}>
                        <img src={img} alt={name} />
                        <h4>{name}</h4>
                        <p>{price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                        <button onClick={() => handleAddtoCart(id)}>Adicionar ao carrinho</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Products;