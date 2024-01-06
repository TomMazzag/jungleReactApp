export function handleClick(plantName) {
    alert(`You want to buy 1 ${plantName}? Great choice 🌱✨`)
}

export function handleSubmit(e) {
    e.preventDefault()
    alert(e.target['my_input'].value)
}

