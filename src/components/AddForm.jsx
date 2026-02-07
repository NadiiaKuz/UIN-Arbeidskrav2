import { useState } from "react"

export default function AddForm() {
    const [nameInput, setNameInput] = useState("")
    const [amountInput, setAmountInput] = useState("")

    return (
        <form className="addForm">
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