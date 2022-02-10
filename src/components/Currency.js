import React from 'react'
import './Currency.css'
const Currency = (props) => {
	return (
		<div className='currency'>
			<select value={props.selectedCurrency} onChange={props.changeCurrency}>
				{props.choices.map((choice, index) => {
					return (
						<option key={index} value={choice}>
							{choice}
						</option>
					)
				})}
			</select>
			<input type='number' value={props.amount} onChange={props.onChange} />
		</div>
	)
}
export default Currency
