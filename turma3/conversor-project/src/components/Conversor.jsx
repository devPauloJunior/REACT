import React, { useState, useEffect } from 'react'
import './Conversor.css'
import axios from 'axios';

const Conversor = () => {
    const [ rates, setRates ] = useState(null)
    const [ fromCurrency, setFromCurrency ] = useState('USD')
    const [ toCurrency, setToCurrency ] = useState('EUR')
    const [ amount, setAmount ] = useState(1)
    const [ convertedAmount, setConvertedAmount ] = useState(null)

    useEffect(() => {
        axios.get('https://v6.exchangerate-api.com/v6/348f1a00d0d92278c12411af/latest/USD').then((res) => {
                setRates(res.data.conversion_rates)
            })
            .catch((err) => {
                console.log('Erro ao obter os dados da API', err)
            })
    }, [])

    useEffect(() => {
        if (rates) {
            const rateFrom = rates[fromCurrency] || 0
            const rateTo = rates[toCurrency] || 0
            setConvertedAmount(((amount / rateFrom) * rateTo).toFixed(2))
        }
    },[rates, amount, fromCurrency, toCurrency] )

    return (
        <div className='converter'>
            <h2>Conversor de Moedas</h2>
            <input 
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <span>Selecion as moedas: </span>
            <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
            >
                {rates && Object.keys(rates).map((currency) =>
                    <option key={currency} value={currency}> { currency }</option>
                )}
            </select>
            <span> converter para: </span>
            <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
            >
                {rates && Object.keys(rates).map((currency) =>
                    <option key={currency} value={currency}>{ currency }</option>
                )}
            </select>
            <h3>{ convertedAmount } { toCurrency }</h3>
            <p>
                { amount } { fromCurrency } valem hoje { convertedAmount } { toCurrency }
            </p>
        </div>
    )
}

export default Conversor