import { useSelector } from "react-redux";
import './style.css'

const Products = () => {

    const {products} = useSelector(state => state);
    
    return (
        <div className='products__container'>
            {products.map(({name, img, price}, index) => {
                return (
                    <div className='product__card' key={index}>
                        <img src={img} alt={name} />
                        <h4>{name}</h4>
                        <p>$ {price.toFixed(2)}</p>
                        <button>Adicionar ao carrinho</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Products;