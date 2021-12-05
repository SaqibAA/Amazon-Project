import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from 'react-router-dom'
import { useStateValue } from './StateProvider';

function Header() {

    const [{cart}, dispatch] = useStateValue();

    return (
        <div className='header'>
            <Link to="/">
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
            </Link>
            

            <div className="header__search">
                <input className="header__searchInput" type="text"/>
                {/* search icon */}
                <SearchIcon className="header__searchIcon"/>
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionlineOne">Hello,Sign in</span>

                    <span className="header__optionlineTwo">Account & Lists</span>

                </div>

                <div className="header__option">
                    <span className="header__optionlineOne">Returns</span>

                    <span className="header__optionlineTwo">& Orders</span>

                </div>

                <div className="header__option">
                
                <span className="header__optionlineOne">Your</span>
                
                <span className="header__optionlineTwo">Prime</span>
                </div>

            </div>

            <Link className='link' to="/checkout">
            <div className="header__cart">
                <ShoppingCartOutlinedIcon className="header__optionlineTwo header__cartIcon"/>

                <span className="header__basketCount">{cart?.length}</span>
            </div>
            </Link>

        </div>

    )
}

export default Header
