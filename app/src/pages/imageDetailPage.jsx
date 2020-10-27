import React, {useState, useEffect} from 'react'

export default function ImageDetailPage(props) {
    console.log(props)
    const imageId = props.match.params.image_id
    const [imageItem, setImageItem] = useState(null)
    console.log(imageItem)
    function fetchImageItem() {
        const url = (`https://image-mock-data.firebaseio.com/images/${imageId}.json`)
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setImageItem(data)
        })
    }

    useEffect(() => {
        fetchImageItem()
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    {imageItem && (
                        <>
                        <h5>{imageItem.title}</h5>
                        <img src={imageItem.imageURL} className='img-fluid' alt=""/>
                        <p>{imageItem.description}</p>
                        </>
                    )}
                </div>
            </div>
            
        </div>
    )
}
