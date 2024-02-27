import React, { useState } from 'react'
import './Calculator.css'

const Calculator = () => {
    const [currentValue, setCurrentValue] = useState('0')
    const [pendingOperator, setPendingOperator] = useState(null)
    const [pendingValue, setPendingValue] = useState(null)
    const [completeOperation, setCompleteOperation] = useState('')

    const keyPadNumber = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    const operations = ['+', '-', '*', '/']

    const handleClick = (val) => {
        setCurrentValue(prevValue => {
            if (prevValue === '0') {
                return val
            } else {
                return prevValue + val
            }
        })
        setCompleteOperation(prevOperation => prevOperation + val)
    }

    const handleOperation = (operation) => {
        setCompleteOperation(currentValue + " " + operation)
        setPendingOperator(operation)
        setPendingValue(currentValue)
        setCurrentValue('0')
    }

    const handleCalculate = () => {
        if (!pendingOperator || !pendingValue) {
            return
        }
        const num1 = parseFloat(pendingValue)
        const num2 = parseFloat(currentValue)

        let result

        switch (pendingOperator) {
            case '+':
                result = num1 + num2
                break
            case '-':
                result = num1 - num2
                break
            case '*':
                result = num1 * num2
                break
            case '/':
                if (num2 !== 0) {
                    result = num1 / num2
                } else {
                    setCurrentValue('Error')
                    setCompleteOperation('Error')
                    setPendingOperator(null)
                    setPendingValue(null)
                    return
                }
                break
            default:
                return
        }
        setCompleteOperation(pendingValue + " " + pendingOperator + " " + currentValue + " = " + result)
    }

    const handleClear = () => {
        setCurrentValue('0')
        setPendingOperator(null)
        setPendingValue(null)
        setCompleteOperation('')
    }

    return (
        <div>
            <h2>Calculadora</h2>
            <div>
                <div>{ completeOperation }</div>
                <div>{ currentValue }</div>
                <div>
                    <button type='button' onClick={handleClear}>AC</button>
                    {keyPadNumber.map((num) =>
                        <button 
                            key={num} 
                            onClick={() => handleClick(num)}>{num}
                        </button>
                    )}
                    {operations.map((operation) => 
                        <button
                            key={operation}
                            onClick={() => handleOperation(operation)}>{ operation }</button>
                    )}
                    <button onClick={handleCalculate}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator