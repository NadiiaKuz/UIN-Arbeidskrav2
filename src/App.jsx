import { useState } from 'react'
import './App.css'
import './style/handleliste.css'
import AddForm from './components/AddForm'

function App() {
  const startItems = [
    {prodId: 1, name: "Melk", amont: 2, bought: false},
    {prodId: 2, name: "Egg", amont: 1, bought: true}
  ]

  const [items, setItems] = useState(startItems)


  return (
    <main>
      <section className='shoping-card'>
        <header className='shopping-header'>
          <h1>Handleliste</h1>
        </header>

        <AddForm />
      
      </section> 
    </main>
  )
}

export default App
