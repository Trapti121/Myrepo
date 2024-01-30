import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card';
import './CartPage.css';
const CartPage = () => {
  const [cartData,setCartData] = useState([]);
  useEffect(()=>{
    async function getData() {
        const res = await axios.get('http://localhost:8000/getData');
        console.log(res.data);
        setCartData([...res.data]);
    }
    getData();
  },[])

  return (
    <>
    <div className='CartBox'>
      <div className='Header'>
        <h3>Cart Items</h3>
      </div>
      {cartData.map((cartData)=>
      <Card
            key={cartData.id}
            cardData={cartData}
          />
        )}
    </div>
    </>
  )
}

export default CartPage;
