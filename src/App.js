import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'

function App() {
	return (
		<div>
			<Navbar />
			<Card
				img='katie_zaferes.png'
				rating='5.0'
				reviewCount={6}
				location='USA'
				title='Life lessons with Katie Zaferes'
				price={136}
			/>
		</div>
	)
}

export default App
