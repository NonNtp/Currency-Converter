import React from 'react'
import money from '../img/money.png'
import './Header.css'
const Header = () => {
	return (
		<header>
			<img src={money} alt='logo' className='money-img' />
			<h1>Currency Converter (API)</h1>
		</header>
	)
}
export default Header
