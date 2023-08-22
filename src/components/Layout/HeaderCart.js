import classes from './HeaderCart.module.css';
import { Fragment, useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

const HeaderCart = props =>{
    const cartCtx = useContext(CartContext)
   let quantity = 0;
   cartCtx.cartItems.forEach(prd => {
    quantity = quantity + Number(prd.amount);
   })
    return (
        <Fragment>
       <button className={classes.button} onClick={props.onClick}>
        <span  className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{quantity}</span>

       </button>
       </Fragment>
    )

};

export default HeaderCart;