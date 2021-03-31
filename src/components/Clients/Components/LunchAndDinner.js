import React, {Fragment} from 'react';
const LunchAndDinner = ({orderList, setOrderList}) =>{
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
        <span onClick={() => addItem({name:'Salmón Sushi Roll', price:2500})} className={clase}>Salmón Sushi Roll $2500</span>
        <span onClick={() => addItem({name:'Pollo Sushi Roll', price:1800})} className={clase}>Pollo Sushi Roll $1800</span>
        <span onClick={() => addItem({name:'Camarón Sushi Roll', price:2900})} className={clase}>Camarón Sushi Roll $2900</span>
        <span onClick={() => addItem({name:'Gohan de Salmón', price:3500})} className={clase}>Gohan de Salmón $3500</span>
        <span onClick={() => addItem({name:'Gohan de Pollo', price:3300})} className={clase}>Gohan de Pollo $3300</span>
        <span onClick={() => addItem({name:'Gohan de Camarón', price:3600})} className={clase}>Gohan de Camarón $3600</span>
        </Fragment>
    )
}

export default LunchAndDinner;