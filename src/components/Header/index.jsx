import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import {GrCart, GrList} from 'react-icons/gr';
import './style.css';

const Header = () => {

    const history = useHistory();

    const {cart} = useSelector(state => state)

    return (
        <header>
            <nav>
                <ul>
                    <li onClick={() => history.push('/cart')}><GrCart/><span>{cart.reduce((acc, item)=> acc + item.quantity, 0)}</span>Carrinho</li>
                    <li onClick={() => history.push('/')}><GrList/>Produtos</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;