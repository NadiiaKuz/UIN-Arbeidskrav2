import { useState } from 'react'
import './App.css'
import './style/handleliste.css'
import AddForm from './components/AddForm'
import ShoppingItem from './components/ShoppingItem'

function App() {
  const startItems = [
    {prodId: 1, name: "Melk", amount: 2, bought: false},
    {prodId: 2, name: "Egg", amount: 1, bought: true}
  ]

  const [items, setItems] = useState(startItems)

  const handleToggle = (prodId) => {
    setItems((prev) => prev.map((item) => item.prodId === prodId ? {...item, bought: !item.bought} : item))
  }

  const handleAmountChange = (prodId, amount) => {
    setItems((prev) => prev.map((item) => (item.prodId === prodId ? {...item, amount} : item)))
  }


  return (
    <main>
      <section className='shoping-card'>
        <header className='shopping-header'>
          <h1>Handleliste</h1>
        </header>

        <AddForm />
        <ShoppingList items={items} handleToggle={handleToggle} onAmountChange={handleAmountChange}/>
      
      </section> 
    </main>
  )
}

export default App
