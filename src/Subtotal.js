import React from 'react';
import { useStateValue } from './StateProvider';
import './Subtotal.css';

function Subtotal() {

    const [{cart}, dispatch] = useStateValue();

    return (
        <div className='subtotal'>
            <p>Subtotal ({cart.length} items): <strong>0</strong></p>
            <small className='subtotal__gift'> <input type="checkbox"></input> This order contains a gift </small>

            <button className="pay__button">Proceed to pay</button>
           

        </div>
        
    )
}

export default Subtotal
