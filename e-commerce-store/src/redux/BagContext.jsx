// memory of the dashboard bag. for in case any component (cart page) needs to use the ddata
import React, { createContext, useState } from 'react';

// Create a context for the bag
export const BagContext = createContext();

// Create a provider component
export const BagProvider = ({ children }) => {
    const [bagItems, setBagItems] = useState([]);

    return (
        <BagContext.Provider value={{ bagItems, setBagItems }}>
            {children}
        </BagContext.Provider>
    );
};
