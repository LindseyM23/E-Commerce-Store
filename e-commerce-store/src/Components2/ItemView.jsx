import React from 'react';
import Navbar from '../Components2/NavBar';
import Bag from '../Components2/CheckoutBagPage';
import NavBar from '../Components2/NavBar';


function ItemView() {
    return(
        <>
        <NavBar />
        <div>Product details</div>
        <Bag />
        </>
    );
};

export default ItemView;