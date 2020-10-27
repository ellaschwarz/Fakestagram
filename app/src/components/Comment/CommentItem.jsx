import React from 'react'

export default function CommentItem(props) {
    return (
        <div className='alert alert-info'>
            <p>{props.itemData.message}</p>
        
        </div>
    )
}
