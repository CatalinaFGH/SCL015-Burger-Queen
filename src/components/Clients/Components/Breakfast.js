import React, {Fragment} from 'react';
const Breakfast = ({orderList, setOrderList}) =>{
    let clase = 'selectFoodItemBtn';

    const addItem = (food) => {
        
        setOrderList(orderList.concat({
          id: orderList.length,
          name: food.name,
          price: food.price,
        }));
        console.log(orderList);
      }
  
    return(
        <Fragment>
        <span onClick={() => {addItem({name: 'Café americano', price: 500})}} className={clase}>Café americano $500</span>
        <span onClick={() => {addItem({name:'Té Verde', price: 800})}} className={clase}>Té Verde $800</span>
        <span onClick={() => {addItem({name:'Chocolate caliente', price: 900})}} className={clase}>Chocolate caliente $900</span>
        <span onClick={() => {addItem({name: 'Sandwich de jamón y queso', price: 1000})}} className={clase}>Sandwich de jamón y queso $1000</span>
        </Fragment>
    )
}

export default Breakfast;