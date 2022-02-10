import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Currency from './components/Currency'
const App = () => {
	const [currencyChoice, setCurrencyChoice] = useState([])
	const [fromCurrency, setFromCurrency] = useState('USD')
	const [toCurrency, setToCurrency] = useState('THB')
	const [amount, setAmount] = useState(1)
	const [exChangeRate, setExChangeRate] = useState(0)
	const [checkFrom, setCheckFrom] = useState(true)

	let fromAmount, toAmount

	if (checkFrom) {
		fromAmount = amount
		toAmount = (amount * exChangeRate).toFixed(2)
	} else {
		toAmount = amount
		fromAmount = (amount / exChangeRate).toFixed(2)
	}

	const fromChangedCurrency = (event) => {
		setFromCurrency(event.target.value)
	}

	const toChangedCurrency = (event) => {
		setToCurrency(event.target.value)
	}

	const amountFromCurrency = (event) => {
		setAmount(event.target.value)
		setCheckFrom(true)
	}

	const amountToCurrency = (event) => {
		setAmount(event.target.value)
		setCheckFrom(false)
	}

	useEffect(() => {
		const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setCurrencyChoice([...Object.keys(data.rates)])
				setExChangeRate(data.rates[toCurrency])
			})
	}, [fromCurrency, toCurrency])

	return (
		<>
			<Header />
			<main>
				<Currency
					choices={currencyChoice}
					selectedCurrency={fromCurrency}
					changeCurrency={fromChangedCurrency}
					amount={fromAmount}
					onChange={amountFromCurrency}
				/>
				<div className='equal'>=</div>
				<Currency
					choices={currencyChoice}
					selectedCurrency={toCurrency}
					changeCurrency={toChangedCurrency}
					amount={toAmount}
					onChange={amountToCurrency}
				/>
			</main>
		</>
	)
}

export default App
