import { Link } from "react-router-dom";
import './style.css';

const Header = () => {
    return (
        <header>
            <Link to='/cart'>Carrinho</Link>
            <Link to='/'>Produtos</Link>
        </header>
    )
}

export default Header;