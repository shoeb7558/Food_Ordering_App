import React, { useState } from 'react'
import Header from './Components/Layout/Header'
import Meals from './Components/Meals/Meals'
import Cart from './Components/Carts/Cart'
import CartProvider from './store/CartProvider'


function App() {

  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true)
  }

 const hideCartHandler =() =>{
  setCartIsShown(false)
 }



  return (
    <CartProvider>
      {cartIsShown && <Cart onclose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>

     
      <main>
        <Meals />
      </main>
    </CartProvider>
  )
}

export default App
