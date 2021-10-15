import React from 'react';
import './Subtotal.css';

function Subtotal() {
    return (
        <div className='subtotal'>
            <p>Subtotal (0 items): <strong>0</strong></p>
            <small className='subtotal__gift'> <input type="checkbox"></input> This order contains a gift </small>

            <button className="pay__button">Proceed to pay</button>
           

        </div>
        
    )
}

export default Subtotal
