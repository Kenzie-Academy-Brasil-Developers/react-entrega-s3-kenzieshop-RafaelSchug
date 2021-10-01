import LIST_PRODUCTS from "./actionTypes";

const initialState = [
    {
        id: 12,
        name: "Smartphone Xiaomi Note 8 64GB Rom 4GB Ram",
        img: "https://m.media-amazon.com/images/I/51wgmCYDFML._AC_SX679_.jpg",
        price: 1110.00,
        onSale: true,
        discount: 166.50
    },
    {
        id: 18,
        name: "XIAOMI 7622 Pulseira Smart Mi Band 6",
        img: "https://m.media-amazon.com/images/I/518Iz2nOCcL._AC_SX522_.jpg",
        price: 232.00,
        onSale: false,
        discount: 0
    },
    {
        id: 21,
        name: "Headphone Freedoom 2 Sound BT",
        img: "https://m.media-amazon.com/images/I/51WANCmFcQL._AC_SX679_.jpg",
        price: 249.00,
        onSale: false,
        discount: 0
    },
    {
        id: 22,
        name: "Smartphone Samsung Galaxy A10S 32GB Dual 6.2",
        img: "https://m.media-amazon.com/images/I/61Or2BmHBoS._AC_SX679_.jpg",
        price: 959.00,
        onSale: false,
        discount: 0
    },
    {
        id: 27,
        name: "Notebook Dell Inspiron i15-3501-A45P 15.6",
        img: "https://m.media-amazon.com/images/I/616PBNK19aL._AC_SX679_.jpg",
        price: 4399.00,
        onSale: true,
        discount: 527.88
    },
    {
        id: 32,
        name: "Wacom One CTL472 - Mesa Digitalizadora",
        img: "https://m.media-amazon.com/images/I/71+xzUu92ZL._AC_SX679_.jpg",
        price: 259.00,
        onSale: false,
        discount: 0
    }

]


const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIST_PRODUCTS:
            return state;
        default:
            return state;
    }
}

export default productsReducer;