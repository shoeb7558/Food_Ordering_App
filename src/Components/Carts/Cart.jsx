import Modal from '../UI/Modal'
import'./CartModule.css';
import { useContext } from 'react';
import CartContext from '../../store/CartContext';
import CartItem from './CartItem';


const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;


  const cartItemRemoveHandler = (id) => {};

  const cartItemAddHandler = (item) => {};

  const cartItems = (
    <ul className='cart-items'>
      {cartCtx.items.map((item) => (
        <CartItem key={item.id}
        name={item.name} 
        amount={item.amount} 
        price={item.price} 
        onRemove={cartItemRemoveHandler.bind(null, item.id)} 
        onAdd={cartItemAddHandler.bind(null, item)}/>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className='total'>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className='actions'>
        <button className='button--alt' onClick={props.onclose}>Close</button>
        { hasItems && <button className='button'>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;