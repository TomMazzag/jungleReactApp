import { plantList } from "./plantList"

function ShoppingList() {
    return (
        <ul>
            {plantList.map((plant) => (
                <li key={`id-${plant.id}`}>
                    {plant.name} 
                    {plant.isBestSale && <span> 🔥</span>}
                </li>
            ))}
        </ul>
    )
}

export default ShoppingList