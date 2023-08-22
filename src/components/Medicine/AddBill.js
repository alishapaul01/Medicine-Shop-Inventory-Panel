import classes from './AddBill.module.css';
import CartContext from '../../store/cart-context';
import { useContext, useState } from 'react';

const AddBill = props => {
   
    const [isValid, setIsValid] = useState(true);
    const cartCtx = useContext(CartContext);
    const addProduct = (e) => {
        // let q = 0;
        e.preventDefault();
        // q += 1;
        cartCtx.addProductCart({...props.products})
        console.log(props.products.quantity)
           if(props.products.quantity <  1) {
            setIsValid(false);
           
           } 
           else if(props.products.quantity === 'Out of Stock') {
            console.log("insideelse",props.products.quantity)
            setIsValid(true);
           } 

        
    }
   
    
   
   
    return (
        <div className={classes.action} >
            <h5>Quantity: {props.products.quantity}</h5>
            <button disabled={props.products.quantity < 1 ? true : false} 
             onClick={addProduct} >Add To Bill</button> 
        </div>
    )

};
export default AddBill;