import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">      
                <img className="home__image" src="https://m.media-amazon.com/images/I/71UhgZQzskL._SX3000_.jpg" alt="" />    

                <div className="home__row">
                    <Product 
                        id='01'
                        title='See U in C by Ali Karim Sayed (Author)'
                        price='4424.56'
                        image='https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SX331_BO1,204,203,200_.jpg'
                    />

                    <Product 
                        id='02'
                        title='Apple iPhone 13 Mini (256GB) - Midnight'
                        price='79,900'
                        image='https://m.media-amazon.com/images/I/61KeIxmldLL._SL1500_.jpg'
                    />

                    <Product 
                        id='03'
                        title='Noise ColorFit Pro 2 Full Touch Control Smart Watch'
                        price='2,799.00'
                        image='https://m.media-amazon.com/images/I/61xzuXWWozS._SL1200_.jpg'
                    />
                    
                </div>

                <div className="home__row">

                <Product 
                        id='04'
                        title='A Portable Waterproof Wireless Speaker- Black'
                        price='20,000'
                        image='https://m.media-amazon.com/images/I/61XvB2DuY8L._SL1500_.jpg'
                    />

                    <Product 
                        id='05'
                        title='YOGINE Screen Mirroring Dongle 1080p HD'
                        price='999.00'
                        image='https://m.media-amazon.com/images/I/41MlH7XjoWL.jpg'
                    />
                </div>
                
                <div className="home__row">
                    <Product 
                        id='06'
                        title='Mi 80 cm (32 inches) HD Ready Android Smart LED TV 4A PRO'
                        price='16,999.00'
                        image='https://m.media-amazon.com/images/I/71Z+l05eSIS._SL1188_.jpg'
                    />
                </div>

            </div>
        </div>
    )
}

export default Home
