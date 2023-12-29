import CartContext from "./CartContext";
import {  useReducer } from "react";


const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
        
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingcartItem = state.items[existingCartItemIndex];

        
        let updatedItems;

        if (existingcartItem) {
            const updatedItem = {
                ...existingcartItem,
                amount: existingcartItem.amount + action.item.amount 
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        else{
           
            updatedItems = state.items.concat(action.item);

        }

        
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    return  defaultCartState;
}

const CartProvider = (props) =>  {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)



    const addItemtoCartHandler = (item) => {
        dispatchCartAction({type: 'ADD', item: item})
    };

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type: 'REMOVE', id:id} )
    };




  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemtoCartHandler,
    removeItem: removeItemFromCartHandler
}

return <CartContext.Provider value={cartContext}>
    {props.children}
</CartContext.Provider>

}

export default CartProvider;