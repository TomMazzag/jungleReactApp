function CareScale(props) {
    const scaleValue = props.value

    const range = [1, 2, 3]

    if (scaleValue) {
        return (
        <div className="lightScale">
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? <span key={rangeElem.toString()}>☀️</span> : null
            )}
        </div>
        )
    }
}

export default CareScale