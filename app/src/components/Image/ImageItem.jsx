import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CommentList from '../Comment/CommentList';
 
import {
	ContainerHeader,
	ImageFooter,
	Testdiv
} from './ImageItemStyles';

export default function ImageItem(props) {
	const [selected, setSelected] = useState(false);
	const [likes, setLikes] = useState(props.image.likes);

	let imageText = props.image.description;
	let substring = imageText.substring(0, 100);

	const [text, setText] = useState(substring);

	const commentURL = `comments/${props.index}`;

	function handleOnClick() {
		setSelected(!selected);
		setLikes(props.image.likes + 1);

		if (props.image.likes === likes) {
			setLikes(props.image.likes + 1);
		} else {
			setLikes(props.image.likes);
		}
	}

	function readMore() {
		if (text === substring) {
			setText(imageText);
		} else {
			setText(substring);
		}
	}

	return (
		<div className='col-md-8'>
			<div className='card' style={{ width: '34rem' }}>
			<ContainerHeader isTrue={true}>
					<img src={props.profilePicture} alt='' />
					<p>{props.firstName}</p>
			</ContainerHeader>

				<img
					className='card-img-top'
					onClick={handleOnClick}
					src={props.image.imageURL}
					alt=''
				/>

				<ImageFooter>
				<button className='likeButton' onClick={handleOnClick}></button>
					<p>
					{likes} Likes {selected && '❤️'}{' '}</p>
				</ImageFooter>
				<div className='card-body'>
					<h5 className='card-title'>{props.image.text} </h5>
					<h6 className='card-text'>{text}</h6>
					<a onClick={readMore}>Read more</a>
					<CommentList url={commentURL} />
					<Link to={`/images/${props.index}`}>Go to image</Link>
				</div>
			</div>
		</div>
	);
}
