import { useState } from "react"

export default function AddForm({handleAddItem}) {
    const [nameInput, setNameInput] = useState('')
    const [amountInput, setAmountInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = nameInput
        const amountNumber = Number(amountInput)

        handleAddItem(name, amountNumber)
        setNameInput('')
        setAmountInput('')
    }

    return (
        <form className="addForm" onSubmit={handleSubmit}>
            <label htmlFor="item-name">Vare</label>
            <input 
                id="item-name"
                name="name"
                type="text"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                placeholder="Egg.."
            />

            <label htmlFor="item-amount">Antall</label>
            <input
                id="item-amount"
                name="amount"
                type="number"
                min="1"
                step="1"
                value={amountInput}
                onChange={(e) => setAmountInput(e.target.value)}
                placeholder="2"
            />

            <button type="submit">Legg til vare</button>

        </form>
    )
}