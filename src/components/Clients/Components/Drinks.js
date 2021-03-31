import React, {Fragment} from 'react';

const Drinks = ({orderList, setOrderList}) =>{
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
            <span onClick={() => addItem({name:'Bebidas en lata', price: 1000 })} className={clase}>Bebidas en lata $1000</span>
            <span onClick={() => addItem({name:'Agua Mineral 750ml', price: 800})} className={clase}>Agua Mineral 750ml $800</span>
            <span onClick={() => addItem({name:'Aloe Drink', price: 1200})} className={clase}>Aloe Drink $1200</span>
            <span onClick={() => addItem({name:'Sake', price: 1500})} className={clase}>Sake $1500</span>
            <span onClick={() => addItem({name:'Té variedades', price: 1300})} className={clase}>Té variedades $1300</span>
        </Fragment>
      )
}
export default Drinks;