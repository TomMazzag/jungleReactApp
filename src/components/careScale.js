function CareScale({scaleValue, careType}) {

    const range = [1, 2, 3]
    const scaleType = careType === 'light' ? '☀️' : '💧'

    if (scaleValue) {
        return (
        <div className="scale">
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
        )
    }
}

export default CareScale