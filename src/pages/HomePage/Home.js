import React, {Component} from 'react'
import {observer} from 'mobx-react';
import './Home.scss';

const Home = observer(class Home extends Component{
	constructor(props) {
		super(props);

	}

	render(){
		return(
			<div className='homeDiv'>
				<span className='textBlock'>Hi People</span>
			</div>
		)
	}
});


export default Home;
