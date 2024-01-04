function Recommendaiton() {
    const currentMonth = new Date().getMonth()
    const isWinter = currentMonth >= 8 && currentMonth <= 11
    if (isWinter) {
        return <div>It's currently winter</div>
    }
    return null
    
}

export default Recommendaiton