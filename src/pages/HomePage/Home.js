import React, { Component } from 'react'
import { observer } from 'mobx-react';
import '../../App.css';
import mainStore from "../../mainStore";
import Pages from "../PageElements/Pages";



const Home = observer(class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: true,
		}
	}

	render() {

		return (
			<div className='BodyElement'>

				{mainStore.pageName === 'Video' ?
					(<Pages.Video/>) : mainStore.pageName === 'AboutMe' ?
						(<Pages.AboutMe/>) : mainStore.pageName === 'Github' ?
							(<Pages.Github/>) : mainStore.pageName==='Login' ?
								(<Pages.Login/>) : mainStore.pageName==='CMSPage'?
									(<Pages.CMSPage/>):(<Pages.Home/>)}
			</div>

		)
	}
});


export default Home;
