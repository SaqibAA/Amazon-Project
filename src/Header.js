import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from 'react-router-dom'
import { useStateValue } from './StateProvider';
import {auth} from './firebase'

function Header() {

    const [{cart, user}, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if(user){
            auth.signOut();
            <Link className='link' to = '/'></Link>
        }
    }

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
               
                <Link className='link' to = {!user &&'/login'}>
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionlineOne">Hello,{user != null
                            ? user.email
                            : 'User'
                        }
                        </span>

                        <span className="header__optionlineTwo">{
                            user != null
                            ? 'Sign Out'
                            : 'Sign in'
                        }
                        </span>

                        {/* <span className="header__optionlineTwo">Account & Lists</span> */}
                    </div>
                </Link>
                

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
