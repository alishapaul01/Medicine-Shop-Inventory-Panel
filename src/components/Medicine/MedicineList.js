import classes from './MedicineList.module.css';
import Card from '../UI/Card/Card';
import MedicineItem from './MedicinesItem';
import CartContext from '../../store/cart-context';
import { useContext } from 'react';


const MedicineList = props => {
    const cartCtx = useContext(CartContext)
    
    const medList = cartCtx.products.map(med =>  <MedicineItem 
        key={med.id}
        id={med.id} 
        name={med.name} 
        des={med.des} 
        price={med.price} 
        quantity={med.quantity}
        amount = {med.amount}
        />

    );

    return (
        
        <section className={classes.list}>
            <Card>
        <ul>
           {medList}
          
            </ul>
            </Card>
        </section>
        )
    
};

export default MedicineList;