import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({id, title, price, image}) {

    const [{cart}, dispatch] = useStateValue();

    // console.log(cart);

    const addToCart = () => {

        dispatch({
            type: "ADD_TO_CART",

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
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                
                <p className="product__price">
                    <bold>₹</bold>
                    <strong>{price}</strong>
                </p>

                <img className="product__image" src={image} alt="" />

            </div>
            <button className="product__button" onClick = {addToCart}>Add To Cart</button>
                {/* <button onClick={() => dispatch({type:"ADD_TO_CART"})}>Add To Cart</button> */}
        </div>
    )
}

export default Product
