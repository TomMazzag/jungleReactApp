import { plantList } from "./plantList"
import CareScale from "./careScale"
import {handleClick} from "./clickScript"

function ShoppingList() {
    return (
        <div className="cart">
            <h2>Cart</h2>
            <ul>
                {plantList.map((plant) => (
                    <li key={`id-${plant.id}`} onClick={() => handleClick(plant.name)}>
                        {plant.name} 
                        {plant.isBestSale && <span> 🔥</span>}
                        <CareScale careType='light' scaleValue={plant.light} />
                        <CareScale careType='water' scaleValue={plant.water} />
                    </li>
                ))}
            </ul>
        </div> 
    )
}

export default ShoppingList