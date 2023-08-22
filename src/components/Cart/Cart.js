import classes from './Cart.module.css';
import Modal from '../UI/Modal/Modal';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';
import { useContext } from 'react';

const Cart = props =>{
    const cartItemCtx = useContext(CartContext)
    let totalAmount = 0;
    const hasCartItems = cartItemCtx.cartItems.length > 0;
  

    const addCartHandler = (item) => {
        const index = cartItemCtx.cartItems.findIndex(ct => ct.id === item.id);
       if(index !== -1) {
        const newQ = Number(item.amount) + 1;
        cartItemCtx.addProductCart({...item,quantity:newQ})
       }
    }
    const removeCartHandler = (id) => {
        cartItemCtx.removeProductCart(id)
    }
    
    const cartItems = <ul className={classes['cart-items']}>{
      cartItemCtx.cartItems.map((item) => 
     
      <CartItem key={item.id} name={item.name} amount={item.amount} quantity={item.quantity} price={item.price} onAdd={addCartHandler.bind(null,item)}
         onRemove={removeCartHandler.bind(null,item.id)} />
      
      )
      }</ul> 
    
      cartItemCtx.cartItems.forEach(item => {
        const sum = Number(item.amount) * Number(item.price)
        totalAmount = totalAmount + sum ;
        
    });
      
    return (
        <Modal onClose={props.onClose}>
            {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>Rs {totalAmount.toFixed(2)}</span>
        </div>
        <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        {hasCartItems && <button className={classes.button}>Place Order</button>}
        </div>
        </Modal>
         
        
    )

}

export default Cart;