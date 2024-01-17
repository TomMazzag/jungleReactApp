import { useState } from 'react'



function QuestionForm() {
    const [inputValue, setInputValue] = useState('Ask your question here')

    function checkValue(value) {
        if (!value.includes('x')) {
            setInputValue(value)
        } else {
            console.log('x typed')
        }
    }

    return (
        <div>
            <textarea
                value={inputValue}
                onChange={(e) => checkValue(e.target.value)}
            />
            <button onClick={() => alert(inputValue)}>Alert me 🚨</button>
        </div>
    )
}

export default QuestionForm
