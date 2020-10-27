import React, { useEffect, useState } from 'react';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';
import firebase from '../../firebaseConfig'

export default function CommentList(props) {
	const [commentListData, setCommentListData] = useState(null);
	const database = firebase.database()
	const commentRef = database.ref(props.url)

	useEffect(() => {
		commentRef.on('value', snapshot => {
			setCommentListData(snapshot.val())
		})
	}, []);

	return (
		<div>
            {commentListData && Object.entries(commentListData).reverse().map((commentItemData, index) => {
                return <CommentItem key={index} itemData={commentItemData[1]} />
            })}
            		<CommentForm url={props.url} />
		</div>
	);
}
