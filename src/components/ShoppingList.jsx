import ShoppingItem from './ShoppingItem'

export default function ShoppingList({items, handleToggle, onAmountChange}){
    return (
        <section>
            <ul className="list-items">
                {items.map((item) => (
                    <ShoppingItem key={item.prodId} item={item} handleToggle={handleToggle} onAmountChange={onAmountChange}/>
                    ))}
            </ul>
        </section>
    )
}