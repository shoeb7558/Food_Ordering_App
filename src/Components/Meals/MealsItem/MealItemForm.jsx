import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import  './MealItemFormModule.css';

const MealItemForm = (props) => {
  const [amountIsValid, setamountIsValid] = useState(true)
  const amountInputRef = useRef();
  
  const submitHandler = event => {
    event.preventDefault();

    const enterdAmount = amountInputRef.current.value;
    const enterdAmountNumber = +enterdAmount;

    if(enterdAmount.trim().length === 0 ||
     enterdAmountNumber < 1 ||
     enterdAmountNumber > 5)
     {
      setamountIsValid(false);
      return;
     }

     props.onAddToCart(enterdAmountNumber)
  }


  return (
    <form className='form' onSubmit={submitHandler}>
      <Input
      ref={amountInputRef}
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please Enter a valid ampunt (1-5).</p>}
    </form>
  );
};

export default MealItemForm;