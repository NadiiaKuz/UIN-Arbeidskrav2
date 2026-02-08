export default function ShoppingItem({item, handleToggle, onAmountChange}){
    const handleAmountChange = (e) => {
        const value = Number(e.target.value)
        if (Number.isNaN(value) || value < 1) {
            return
        }
        onAmountChange(item.prodId, value)
    }

    return (
        <li className="item">
            <label className="item-check">
                <input
                    type="checkbox"
                    checked={item.bought}
                    onChange={() => handleToggle(item.prodId)}
                />
                <span className="item-name">{item.name}</span>
            </label>

            <input className="item-amount"
                type="number"
                min="1"
                step="1"
                value={item.amount}
                onChange={handleAmountChange}
            />
        </li>
    )
}