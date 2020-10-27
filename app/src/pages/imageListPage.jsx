import React, { useState, useEffect } from 'react';

import ImageItem from '../components/Image/ImageItem';
import Header from '../components/header/header';

export default function ImageList() {
	const [data, setData] = useState([]);
	const [expandedItem, setExpandedItem] = useState(null);
	const [user, setUser] = useState([]);

	function handleFetchImages() {
		fetch('https://image-mock-data.firebaseio.com/images.json')
			.then(res => res.json())
			.then(result => {
				setData(result);
			});
	}

	const fetchUserData = () => {
		const BASE_URL = 'https://5da81b8f23fa740014697d60.mockapi.io';
		fetch(`${BASE_URL}/Todo`)
			.then(res => res.json())
			.then(result => {
				setUser(result);
				console.log(result);
			});
	};

	useEffect(() => {
		handleFetchImages();
		fetchUserData();
	}, []);

	console.log(user);
	return (
		<>
			<Header />
			<div className='container'>
				<div className='row'>
					<div className='col-md-8 offset-md-2'>
						{user &&
							data.map((image, index) => {
								return (
									user[index] && (
										<ImageItem
											key={index}
											index={index}
											firstName={user[index].name}
											profilePicture={user[index].picture}
											image={image}
											expandedItem={expandedItem}
											setExpandedItem={setExpandedItem}
										/>
									)
								);
							})}
					</div>
				</div>
			</div>
		</>
	);
}
