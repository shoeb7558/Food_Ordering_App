import React from 'react'
import  './HeaderCss.css'
import mealsImage from '../../assets/meals.jpg';
import CartIcon from '../UI/carticon';




const  Header = () => {
  return (
    <>

    <div className='HeaderDiv1'>
      <div className='HeaderDiv2'>
        <h2>ReactMeals</h2>
      </div>
      <div className='HeaderDiv3' >
        <button className='HeaderButton1'> <CartIcon />Your Cart</button>
      </div>
      
    </div>
    <img className='image1' src={mealsImage} alt="ReactMeals" /> 
    </>
  )
}

export default Header;
