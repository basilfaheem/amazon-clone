import React from 'react'
import { useStateValue } from '../StateProvider';
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal'

function Checkout() {
    const [{ basket,user }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
            <img
            className="checkout__ad"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/pc_banner_2.jpg" />
           
            <div>
              <h2 className="checkout__title">Hey, {user?.email}-  It's Your Shopping Basket</h2>
              
               {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}

        </div>
      </div>
            <div className="checkout__right">
                <h2>Total Amount :-</h2>
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
