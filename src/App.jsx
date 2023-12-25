import React from 'react'
import Header from './Components/Layout/Header'
import Meals from './Components/Meals/Meals'
import Cart from './Components/Carts/Cart'

function App() {
  return (
    <div>
      <Cart/>
      <Header>

      </Header>
      <main>
        <Meals />
      </main>
    </div>
  )
}

export default App
