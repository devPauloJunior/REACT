import React, { useState } from 'react'
import './Calculator.css'

const Calculator = () => {
    const [ currentValue, setCurrentValue ] = useState('0')
    const [ pendingOperator, setPendingOperator ] = useState(null)
    const [ pendingValue, setPendingValue ] = useState(null)
    const [ completeOperation, setCompleteOperation ] = useState('')
    
    const keyPadNumber = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ]
    const operations = [ '+', '-', '*', '/' ]

    const handleClick = (val) => {
        setCurrentValue( prevValue => {
            if (prevValue === '0') {
                return val
            } else {
                return prevValue + val
            }
        })
        setCompleteOperation(prevOperation => prevOperation + val)
    }

  return (
    <div>
        <h2>Calculadora</h2>
    </div>
  )
}

export default Calculator