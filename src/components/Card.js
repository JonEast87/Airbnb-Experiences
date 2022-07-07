import React from 'react'

export default function Card(props) {
	return (
		<div className='card'>
			<img src={`../images/${props.img}`} className='card--image' alt='main' />
			<div className='card--stats'>
				<img src='../images/star.png' className='card--star' alt='star' />
				<span>{props.rating}</span>
				<span className='gray'>({props.reviewCount}) •</span>
				<span className='gray'>{props.location}</span>
			</div>
			<p>{props.title}</p>
			<p>
				<span className='bold'>From ${props.price}</span> / person
			</p>
		</div>
	)
}
