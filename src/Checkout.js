import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {

    const [{cart}, dispatch] = useStateValue();

    return (
        <div className='checkout'>

            <div className='checkout__left'>
                <img className='checkout__adv' src='https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Jupiter21P1/pay_stripe_desk.png' alt='' />
                <div>
                    <h3 className='checkout__title'>Your Shopping Details</h3>

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

            <div className='checkout__right'>
                <Subtotal />
            </div>

        </div>
    )
}

export default Checkout
