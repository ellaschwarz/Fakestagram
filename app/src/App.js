import React, {useState, useEffect} from 'react';
import {Switch, Route, Link} from 'react-router-dom'
import ImageDetailPage from './pages/imageDetailPage';
import ImageListPage from './pages/imageListPage';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
	const [data, setData] = useState([])

	function handleFetchImages() {
	  fetch("https://image-mock-data.firebaseio.com/images.json")
	  .then(res => res.json())
	  .then(result => {
		setData(result)
	  })
	}
  
	useEffect(() => {
	  handleFetchImages()
	}, [])

	return (
		<>
		<ul>
			<li><Link to='/'>Home</Link></li>
			<li><Link to='/image-list'>Images</Link></li>
			<li><Link to='/about'>About</Link></li>
		</ul>
		<Switch>
			<Route path='/images/:image_id' component={ImageDetailPage}></Route>
			<Route path='/image-list'><ImageListPage /></Route>
			<Route path='/about'><p>Detta är en klon av instagram</p></Route>
			<Route path='/'><p>Välkommen till startsidan</p></Route>

		</Switch>

		<div className="container">
      <ImageListPage images={data} />
    </div>
		</>
	);
}

export default App;


