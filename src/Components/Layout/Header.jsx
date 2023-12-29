import React from 'react'
import  './HeaderCss.css'
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';






const  Header = (props) => {
  return (
    <>

    <div className='HeaderDiv1'>
      <div className='HeaderDiv2'>
        <h2>ReactMeals</h2>
      </div>
      <div className='HeaderDiv3' >
      <HeaderCartButton onClick={props.onShowCart}/>
      </div>
      
    </div>
    <img className='image1' src={mealsImage} alt="ReactMeals" /> 
    </>
  )
}

export default Header;
