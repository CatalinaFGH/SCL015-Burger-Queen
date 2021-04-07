import React, {Fragment} from 'react';
import { v4 as uuidv4 } from 'uuid';
const Appetizers = ({orderList, setOrderList}) =>{
    let clase = 'selectFoodItemBtn';
    const addItem = (food) => {
  
        setOrderList(orderList.concat({
          id: uuidv4(),
          name: food.name,
          price: food.price,
        }));
        console.log(orderList);
      }
  
    return(
        <Fragment>
        <span onClick={() => addItem({name:'Gyozas', price: 2000})} className={clase}>Gyozas $2000</span>
        <span onClick={() => addItem({name:'Camarón Furay', price: 2500})} className={clase}>Camaron Furay $2500</span>
        <span onClick={() => addItem({name:'Onigiri', price: 1500})} className={clase}>Onigiri $1500</span>
        <span onClick={() => addItem({name:'Temaki', price: 1500})} className={clase}>Temaki $1500</span>
        </Fragment>
    )
}

export default Appetizers;