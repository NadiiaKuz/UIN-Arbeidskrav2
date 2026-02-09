import { useState } from "react"

export default function AddForm({handleAddItem}) {
    const [nameInput, setNameInput] = useState('')
    const [amountInput, setAmountInput] = useState('')

    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = nameInput
        const amountNumber = Number(amountInput)

        if (!name && !amountInput) {
            setError("Skriv inn vare og antall")
            return
        }

        if (!name) {
            setError("Skriv inn vare")
            return
        }

        if (!amountInput || Number.isNaN(amountNumber)) {
            setError("Skriv inn antall")
            return
        }

        handleAddItem(name, amountNumber)
        setNameInput('')
        setAmountInput('')
        setError("")
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

            {error ? (<p className="error" role="alert">{error}</p>) : null}

        </form>
    )
}