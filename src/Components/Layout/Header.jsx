import React from 'react'
import  './HeaderCss.css'
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';






const  Header = () => {
  return (
    <>

    <div className='HeaderDiv1'>
      <div className='HeaderDiv2'>
        <h2>ReactMeals</h2>
      </div>
      <div className='HeaderDiv3' >
      <HeaderCartButton />
      </div>
      
    </div>
    <img className='image1' src={mealsImage} alt="ReactMeals" /> 
    </>
  )
}

export default Header;
