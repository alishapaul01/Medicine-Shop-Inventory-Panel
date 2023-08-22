import classes from './MedicineForm.module.css';
import Button from '../UI/Button/Button';
import { useContext, useState } from 'react';
import CartContext from '../../store/cart-context';

const MedicineForm =  props => {
  const [enteredId, setEnteredId] = useState('');
    const [enteredName, setEnteredName] = useState('');
    const [enteredDes,setEnteredDes] = useState('');
    const [enteredPrice, setEnteredPrice] =useState('');
    const [enteredQuantity, setEnteredQuantity] = useState('');

    const cartCtx = useContext(CartContext);

    const updateId = (e) => {
      setEnteredId(e.target.value);
      
  }
  const updateName = (e) => {
      setEnteredName(e.target.value);
  }
  const updateDes = (e) => {
      setEnteredDes(e.target.value);
  }
  const updatePrice = (e) => {
      setEnteredPrice(e.target.value);
      
  }
  const updateQuantity = (e) => {
    setEnteredQuantity(e.target.value);
    
}
const addProduct = (e) => {
  e.preventDefault();
  const productDetails = {
    id: enteredId,
    name: enteredName,
    des: enteredDes,
    price: enteredPrice,
    quantity: enteredQuantity,
    amount: 0
  };

  cartCtx.addProduct(productDetails);
  setEnteredId('');
  setEnteredName('');
  setEnteredDes('');
  setEnteredPrice('');
  setEnteredQuantity('');

}

    return (
        <section className={classes.form}>
        
         <form onSubmit={addProduct}>
         <div className={classes.input}>
             <label htmlFor="productID">Medicine ID </label>
             <input type="number" id="productID" 
             value={enteredId} onChange={updateId}
              />
             </div>
          <div className={classes.input}>
             <label htmlFor="name">Medicine Name</label>
             <input type="text" id="name" 
             value={enteredName} onChange={updateName}
              />
         </div>
         <div className={classes.input}>
             <label htmlFor="medDes">Medicine Description</label>
             <input type="text" id="medDes"
              value={enteredDes} onChange={updateDes}
              />
             </div>
             <div className={classes.input}>
             <label htmlFor="medPrice">Medicine Price </label>
             <input type="number" id="medPrice" 
             value={enteredPrice} onChange={updatePrice}
              />
         </div>
         <div className={classes.input}>
         <label htmlFor="qauntity">Quantity </label>
             <input type="number" id="quantity" 
             value={enteredQuantity} onChange={updateQuantity}
              />
         </div>
        <div className={classes.action} >
             <Button type="submit">Add Product</Button>
             </div>
         </form>
        </section>
        
     )
};

export default MedicineForm;