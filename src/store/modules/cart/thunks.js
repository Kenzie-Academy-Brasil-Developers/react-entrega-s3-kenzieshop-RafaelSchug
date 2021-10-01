import {addToCart, removeFromCart, performCheckout} from "./actions";
import { toast } from "react-toastify";

export const addToCartThunk = (product) => (dispatch, globalStore) => {

    const {cart} = globalStore();
    const cartContainsItem = cart.some(item => item.id === product.id);
    let cartUpdated;

    if(!cartContainsItem) {
        cartUpdated = [...cart, {...product, quantity: 1}];
    } else {
        cartUpdated = cart.map(item => {
            if(item.id === product.id){
                return {...item, quantity: item.quantity + 1}
            } else {
                return item;
            }
        })
    }

    dispatch(addToCart(cartUpdated));
    localStorage.setItem('@cart', JSON.stringify(cartUpdated))

}

export const removeFromCartThunk = (id) => (dispatch, globalStore) => {
    const {cart} = globalStore();
    const checkQuantity = cart.find(item => item.id === id).quantity;
    let cartUpdated;

    if(checkQuantity > 1){
        cartUpdated = cart.map(item => {
            if(item.id === id){
                return {...item, quantity : item.quantity - 1};
            } else {
                return item;
            }
        })
        dispatch(removeFromCart(cartUpdated));
    } else {
        cartUpdated = cart.filter(item => item.id !== id);
        dispatch(removeFromCart(cartUpdated));
    }
    
    localStorage.setItem('@cart', JSON.stringify(cartUpdated))
}

export const performCheckoutThunk = () => (dispatch) => {
    
    const wait = new Promise((response) => {
        setTimeout(response, 2000);
    }).then(_ => {
        dispatch(performCheckout([]));
        toast.info("Obrigado por comprar na Kenzie Shop! Volte sempre :)", {autoClose: 3500})
        localStorage.removeItem('@cart');
    })

    toast.promise(wait, {pending: "Processando pedido...", success:"Pedido finalizado com sucesso!"}, {autoClose: 2000})

}