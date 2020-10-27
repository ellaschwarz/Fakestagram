import React, { useState, useEffect } from 'react';

import ImageItem from '../components/ImageItem';
import Header from '../components/header/header';
import axios from 'axios';

export default function ImageList() {
	const [data, setData] = useState([]);
	const [expandedItem, setExpandedItem] = useState(null);
	const [user, setUser] = useState([]);
	const [loading, setLoading] = useState(false);

	function handleFetchImages() {
		fetch('https://image-mock-data.firebaseio.com/images.json')
			.then(res => res.json())
			.then(result => {
				setData(result);
			});
	}

	const fetchUserData = () => {
		const APP_ID = '{5f98014a886ad32970b31662}';
		const BASE_URL = 'https://5da81b8f23fa740014697d60.mockapi.io';
		fetch(`${BASE_URL}/Todo`)
			.then(res => res.json())
			.then(result => {
				setUser(result);
				console.log(result);
			});
	};

	//  setLoading(true);
	//   axios.get(`${BASE_URL}/user`, { headers: { 'app-id': APP_ID } })
	//       .then(({ user }) => setUser(user))
	//       .then(console.log(user))
	//       .catch(console.error)
	//      .finally(() => setLoading(false));

	// let userData = {
	//   firstname: user.firstName,
	//   picture: user.picture
	//   }

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
						{loading && 'Loading...'}
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
