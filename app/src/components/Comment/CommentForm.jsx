import React, { useState } from 'react';
import firebase from '../../firebaseConfig';
import styled, {css} from 'styled-components';

export default function CommentForm(props) {
	const [messageInputData, setMessageInputData] = useState('');
	const database = firebase.database();
	const commentRef = database.ref(props.url);

	const handlePostMessage = e => {
		e.preventDefault();
		commentRef.push({ message: messageInputData });
		setMessageInputData('');
	};

	const Button = styled.button`
		padding: 3px;
		color: palevioletred;
	
	`

	return (
		<form onSubmit={handlePostMessage} className='form-inline'>
			<div className='form-group'>
				<input
					type='text'
					className='form-control'
					value={messageInputData}
					onChange={e => setMessageInputData(e.target.value)}
					placeholder='Enter comment'
				/>
			</div>
			<Button>Send</Button>
		</form>
	);
}
