import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from './reducer';
import { useStateValue } from './StateProvider';
import './Subtotal.css';

function Subtotal() {

    const [{cart}, dispatch] = useStateValue();

    return (
        <div className='subtotal'>

            <CurrencyFormat
                renderText = { (value) => (
                    <>
                       <p>Subtotal ({cart.length} items):<strong>{value}</strong> </p>
                        <small className='subtotal__gift'> <input type="checkbox"></input> This order contains a gift </small>
                    </>
                )}
                    decimalScale = {2}
                    value = {getCartTotal(cart)}
                    displayType = {"text"}
                    thousandSeparator = {true}
                    prefix = {'₹'}
            />
                <button className="pay__button">Proceed to pay</button>
           

        </div>
        
    )
}

export default Subtotal
