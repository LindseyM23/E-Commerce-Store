import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import ProductList from '../styles/ProductList.css';
import '../App.css';
import Rating from './Rating';
import {addToBag} from '../Components2/CheckoutBagPage';
import {addToCartPage} from '../Components/CartPage';





const ProductPage = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const products = [
        {
            id:1,
            image: "assets/image16.png",
            name: "Apple Watch",
            description: 'Stay connected and active with the Apple Watch Series 5 SE, featuring advanced health tracking and customizable watch faces.',
            fullDescription: 'Stay connected and active with the Apple Watch Series 5 SE, featuring advanced health tracking and customizable watch faces. The Series 5 SE offers a Retina display, ECG app, fall detection, and built-in compass. It also includes an always-on altimeter and a variety of workout modes to monitor your fitness activities. The watch is swim-proof, making it ideal for all kinds of water activities.',
            price: 529.99,
            Rating: 4
       
        },
        {
            id:2,
            image: "assets/image1.png",
            name: "Sony ZX330BT",
            description: "Light Grey",
            smallDescription:'Experience wireless freedom and superior sound quality with the light grey Sony ZX33OBT headphones.',
            fullDescription:'Experience wireless freedom and superior sound quality with the light grey Sony ZX33OBT headphones. These headphones offer Bluetooth connectivity, 30mm driver units for dynamic sound, and a swivel design for easy portability. The built-in microphone and NFC one-touch connection provide convenience for hands-free calls and music streaming.',
            price: 39.99,
            Rating: 4
        },
        {
            id:3,
            image: "assets/image13.png",
            name: "iPhone 11",
            description: "Serious Black",
            smalldescription: 'The iPhone 11 in Serious Black offers stunning photos, powerful performance, and all-day battery life.',
            fullDescription: 'The iPhone 11 in Serious Black offers stunning photos, powerful performance, and all-day battery life. It features a 6.1-inch Liquid Retina HD display, dual-camera system with 12MP Ultra Wide and Wide cameras, and Night mode for impressive low-light photography. Powered by the A13 Bionic chip, the iPhone 11 provides smooth performance and efficient multitasking.',
            price: 619.99,
            Rating: 4
        },
        {
            id:4,
            image: "assets/image11.png",
            name: "iPhone 11",
            description: "Subway Blue",
            fullDescription: 'Enjoy the sleek design and robust features of the iPhone 11, now available in the eye-catching Subway Blue. This model includes a 6.1-inch Liquid Retina HD display, dual-camera system with Ultra Wide and Wide lenses, and all the advanced features of iOS. The A13 Bionic chip ensures powerful performance for all your apps and games.',
            smallDescription: 'Enjoy the sleek design and robust features of the iPhone 11, now available in the eye-catching Subway Blue.',
            price: 619.99,
            Rating: 4
          },
          {
            id:5,
            image: "assets/image15.png",
            name: "iPhone 11",
            description: "Product RED",
            smallDescription:'Make a statement with the iPhone 11 in Product RED, combining cutting-edge technology with a bold color.',
            fullDescription:' Make a statement with the iPhone 11 in Product RED, combining cutting-edge technology with a bold color. This edition supports the global fight against AIDS with a portion of proceeds going to the Global Fund. It features the same powerful A13 Bionic chip, dual-camera system, and long battery life as other iPhone 11 models.',
            price: 619.99,
            Rating: 4
          },
          {
            id:6,
            image: "assets/image9.png",
            name: "iPhone 13",
            description: "Milky White",
            smallDescription:'The iPhone 11 in Milky White provides a clean, classic look with the power and performance you expect from Apple.',
            fullDescription: 'The iPhone 11 in Milky White provides a clean, classic look with the power and performance you expect from Apple. This model includes a 6.1-inch Liquid Retina HD display, dual 12MP cameras with 4K video recording, and Night mode. With its robust design and water resistance, it is built to last in any environment.',
            price: 619.99,
            Rating: 4
          },
          {
            id:7,
            image: "assets/image15.png",
            name: "iPhone 14",
            description: "Product RED",
            smallDescription:'The latest iPhone 14 in Product RED delivers unmatched performance, cutting-edge features, and a striking design.',
            fullDescription:'The latest iPhone 14 in Product RED delivers unmatched performance, cutting-edge features, and a striking design. Powered by the A16 Bionic chip, it provides extraordinary speed and efficiency. The iPhone 14 includes an advanced camera system with ProRAW capabilities and enhanced battery life for all-day use.',
            price: 619.99,
            Rating: 4
          },
    ];

    const handleItemView = (products) => {

        navigate('/item-view', {state: {products} });
    };

    const handleAddToBag = (products) => {
         addToBag(products);
         addToCartPage(products);

    };

    const filteredProducts = products.filter(products =>
        products.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
    );

    return(
        <>
        <div className='container'>
            <div className="search-bar mb-4 mx-auto" style={{maxWidth: '50%'}}>
                <label className="search-label" htmlFor="search">Search Item</label>
                <input type="text" id="search" className="form-control" placeholder="Apple Watch, Samsung 21, Macbook Pro" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            </div>
        </div>
        
        
        
        </>
    )
}
export default ProductPage;