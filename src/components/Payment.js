import React from 'react'
import "./Payment.css"
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from './CheckoutProduct';
import StripeCheckout from "react-stripe-checkout"
import { getBasketTotal } from '../reducer';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();


    const handleToken =(token, addresses)=>(
        console.log(token,addresses)
        
    )
    return (
        <div className="payment">
         <div className='payment__container'>
                <h1>
                    Checkout (
                        <Link to="/checkout">{basket?.length} items</Link>
                        )
                </h1>


                {/* Payment section - delivery address */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                {/* Payment section - Review Items */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
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
            

                {/* Payment section - Payment method */}
                <div className='payment__section'>
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                            {/* Stripe magic will go */}
                            <h4>Amount to be payed: $ {getBasketTotal(basket) }</h4>
                            <StripeCheckout
                            stripeKey="pk_test_51H45acGuwcpoNAgOmkeZgAprKFJr4o6FG4ffip6hDFMHxvB9O2d910ULgQ2VjPybphZG1LymAfMqWXJ4cHL0OutU00f4QVgjmB"
                            token={handleToken}
                            billingAddress
                            shippingAddress
                            amount={getBasketTotal(basket) * 100}
                            
                            />

                            
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
