import { plantList } from "./plantList"
import CareScale from "./careScale"

function ShoppingList() {
    return (
        <ul>
            {plantList.map((plant) => (
                <li key={`id-${plant.id}`}>
                    {plant.name} 
                    {plant.isBestSale && <span> 🔥</span>}
                    <CareScale value={plant.light} />
                </li>
            ))}
        </ul>
    )
}

export default ShoppingList