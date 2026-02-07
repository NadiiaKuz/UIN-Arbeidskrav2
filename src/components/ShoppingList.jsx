import ShoppingItem from './ShoppingItem'

export default function ShoppingList({items, handleToggle, onAmountChange}){
    return (
        <section className="shoppingList">
            <ul className="list-items">
                {items.map((item) => (<ShoppingItem />))}
            </ul>
        </section>
    )
}