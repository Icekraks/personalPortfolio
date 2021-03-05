import React, { Component } from 'react'
import { observer } from 'mobx-react';
import './Home.scss';
import mainStore from "../../mainStore";
import { felixData, rsTable } from '../../variables'
import { hiscores } from 'osrs-json-api';

import Pages from "../PageElements/Pages";


import { Button, Input } from "reactstrap";
import DataTable from 'react-data-table-component'

const name = "Felix Hu";


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

				{/*{mainPage}*/}
				{mainStore.pageName === 'Video' ? (<Pages.Video/>) : mainStore.pageName === 'AboutMe' ? (
					<Pages.AboutMe/>) : mainStore.pageName === 'Github' ? (<Pages.Github/>) : (<Pages.Home/>)}
			</div>

		)
	}
});


export default Home;
