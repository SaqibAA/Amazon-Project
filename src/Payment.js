import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';

function Payment() {

    const [{cart, user}, dispatch] = useStateValue(); 
    return (
        <div className='payment'>
            <div className='payment_container'>
                {/* Delivery Address */}
                <div className='payment_section'>
                    <h3>Delivery Address:</h3>
                    <div className='address'>
                        <p>{user?.email}</p>
                        <p>Seven Bunglow, Versova</p>
                        <p>Andheri, Maharashtra</p>
                    </div>
                </div>
                {/* Cart Review */}
                <div className='payment_section'>
                    <h3>Review Your Item in Cart:</h3>
                    <div className='payment_item'>
                        {cart.map((item) =>
                            <CheckoutProduct 
                                id = {item.id}
                                title = {item.title}
                                image = {item.image}
                                price = {item.price}
                            />
                        )}
                    </div>
                </div>
                {/* Payment Gateway */}
                <div className='payment_section'>
                    <h3>Payment Method</h3>
                    <div className='payment_details'>
                        {/* Stripe Secret Code */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
