import { useState } from 'react'

function Cart() {

	const monsteraPrice = 8
	const [quantity, updateCart] = useState(0)
	const [isOpen, setIsOpen] = useState(false)

	//const ivyPrice = 10
	//const flowerPrice = 15
	return isOpen ?(
		<div className='jh-cart'>
			<button onClick={() => setIsOpen(false)}>Close</button>
			<h2>Cart</h2>
			<ul>
				<li>Monstera : {monsteraPrice}€</li>
				<button onClick={() => updateCart(quantity + 1)}>
                    Add
                </button>
			</ul>
			Total : {monsteraPrice * quantity}€
		</div>
) : (
		<button onClick={() => setIsOpen(true)}>Open Cart</button>
	)
}

export default Cart