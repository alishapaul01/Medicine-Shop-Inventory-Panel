import React from "react";

const CartContext = React.createContext({
    products: [],
    cartItems:[],
    totalAmount: 0,
    addProduct: (proudct) => {},
    addProductCart:(product) => {},
    removeProductCart:(id) => {},
    recievedItems: [],
});

export default CartContext;