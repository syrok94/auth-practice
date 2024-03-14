import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () =>{
    return useContext(CartContext);
}

// eslint-disable-next-line react/prop-types
export const CartProvider = ({children}) =>{
    
    const [CartItems, setCartItems] = useState([]);

    const addItems = (item) =>{
        return setCartItems([...CartItems , item]);
    }

    const removeItems = (id) =>{
        return setCartItems(CartItems.filter((item) => item.id !== id));
    }

    return(
        <CartContext.Provider value={{addItems,removeItems,CartItems}}>
            {children}
        </CartContext.Provider>
    );
};



