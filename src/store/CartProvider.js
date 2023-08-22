import CartContext from "./cart-context";
import { useState } from "react";

const CartProvider = props => {
    const [medicineItem, setMedicineItem] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    const addProductHandler = (product) => {
        setMedicineItem(preProduct => {
            return [...preProduct,product];
        })
    }
    const addProductCartHandler = (product) => {
        const index = cartItems.findIndex(ct => ct.id === product.id);
        const medicineIndex = medicineItem.findIndex(pid => pid.id === product.id)
        if(index === -1) {
            const updateCart = cartItems.push({
                ...product,
                amount:1
              });
              medicineItem[medicineIndex].quantity -= 1;
              setCartItems(updateCart)
            }
              else{
                cartItems[index].quantity -=1;
                medicineItem[medicineIndex].quantity -= 1;
                cartItems[index].amount += 1;
                setCartItems([...cartItems]);
               
              }
        setCartItems([...cartItems])
    }
    const removeProductCartHandler = id => {
        const index = cartItems.findIndex(ct => ct.id === id);
        if(index !== -1) {
            const newQuant = 1;
            
            medicineItem[index].quantity += newQuant;
            cartItems[index].amount -= newQuant;
            if(cartItems[index].amount === 0) {
                cartItems.splice(index, 1);
            }
            const updateCart = [...cartItems];
            setCartItems(updateCart);
        }
        setCartItems([...cartItems])
    }
    
    const cartContext = {
        products: medicineItem,
        cartItems:cartItems,
        totalAmount: 0,
        addProduct: addProductHandler,
        addProductCart: addProductCartHandler,
        removeProductCart:removeProductCartHandler
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )

};

export default CartProvider;