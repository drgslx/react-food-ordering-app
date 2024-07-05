import { createContext, useReducer } from "react";

 const CartContext = createContext({
    items: [],
addItem: (item) => {},
removeItem: (id) => {},
clearCart: () => {},



})

function cartReducer (state, action) {
    if (action.type === 'ADD_ITEM') {
        // Find index of existing cart item
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
        // Create a copy of the current items
        const updatedItems = [...state.items];
    
        if (existingCartItemIndex >= 0) {
            // If the item exists, update its quantity
            const updatedItem = {
                ...state.items[existingCartItemIndex],
                quantity: state.items[existingCartItemIndex].quantity + 1
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            // If the item doesn't exist, add it to the array
            updatedItems.push({...action.item, quantity: 1});
        }
    
        // Return the new state
        return {
            ...state,
            items: updatedItems
        };
    }

    if(action.type === 'REMOVE_ITEM') {
        ///
    }
    return state;
}
export function CartContextProvider({ children }) {
  useReducer(cartReducer, {items: []}) => {
      
  }
  return <CartContext.Provider >{children}</CartContext.Provider>;
}

export default CartContext;