import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, title, price, image}) {

    const [{cart}, dispatch] = useStateValue();

    const removeToCart = () => {

        dispatch({
            type: "REMOVE_TO_CART",

            item:{
               id: id,
               title: title,
               price: price,
               image: image, 
            }
        }
        );
    }
    
    return (
        <div className='checkout_product'>
            
            <img className='checkout_product_image' src={image} />

            <div className='checkout_product_info' >
                <p className='checkout_product_title'>{title}</p>
                <p className='checkout_product_price'>
                    <bold>₹</bold>
                    <strong>{price}</strong>
                </p>
                <button className='remove_button' onClick = {removeToCart}>Romove From Cart</button>
            </div>

        </div>
    )
}

export default CheckoutProduct
