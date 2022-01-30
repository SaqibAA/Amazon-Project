import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { getCartTotal } from './reducer';
import { useStateValue } from './StateProvider';

function Payment() {

    const [{cart, user}, dispatch] = useStateValue(); 

    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {

        const getClintSecret = async () => {
            const responce = await axios({
                method: 'post',
                //Strip expect total amount in base currencies like Rupees to paise
                url:`/payments/create?total=${getCartTotal(cart) * 100}`,
            });
            setClientSecret(responce.data.clientSecret)
        }
        getClintSecret();
    },[cart])

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then( ({paymentIntent}) => {
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            history.replace('/orders')
        })
    }

    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : '');
    }

    return (
        <div className='payment'>
            <div className='payment_container'>
                {/* Delivery Address */}
                <div className='payment_section'>
                    <div className='payment_title'>
                      <h3>Delivery Address:</h3>
                    </div>
                    <div className='address'>
                        <p>{user?.email}</p>
                        <p>Seven Bunglow, Versova</p>
                        <p>Andheri, Maharashtra</p>
                    </div>
                </div>
                {/* Cart Review */}
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Review Your Item in Cart:</h3>
                    </div>
                    <div className='payment_items'>
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
                    <div className='payment_title'>
                       <h3>Payment Method</h3>
                    </div>
                    <div className='payment_details'>
                        {/* Stripe Secret Code */}

                        <form onSubmit={handleSubmit}> 
                            <CardElement  onChange={handleChange}/>

                            <div className='payment_price'>
                                <CurrencyFormat
                                    renderText = { (value) => (
                                        <>
                                        <p>Subtotal ({cart.length} items):<strong>{value}</strong> </p>
                                            
                                        </>
                                    )}
                                        decimalScale = {2}
                                        value = {getCartTotal(cart)}
                                        displayType = {"text"}
                                        thousandSeparator = {true}
                                        prefix = {'₹'}
                                />

                                <button disabled = {processing || disabled || succeeded}> 
                                        <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                                </button>

                            </div>

                            {/* Error */}
                            {error && <div>{error}</div>}

                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
