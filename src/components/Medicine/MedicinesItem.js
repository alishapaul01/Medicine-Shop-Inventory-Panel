import classes from './MedicinesItem.module.css';
import AddBill from './AddBill';

const MedicineItem = props => {
    return (
        <li  className={classes.med} key={props.id}>
            <div>
                
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.des}</div>
                <div className={classes.price}> Rs {props.price}</div>
            </div>
            <div>
               <AddBill products={props} /> 
            </div>
        </li>
    )

};

export default MedicineItem;