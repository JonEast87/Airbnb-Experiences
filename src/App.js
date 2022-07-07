import React from 'react'
import data from './data'
import Navbar from './components/Navbar'
// import Hero from './components/Hero'
import Card from './components/Card'

export default function App() {
	const cards = data.map((item) => {
		return <Card key={item.id} item={item} />
	})

	return (
		<div>
			<Navbar />
			<section className='cards-list'>{cards}</section>
		</div>
	)
}
