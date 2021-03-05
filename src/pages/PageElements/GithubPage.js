import React, { Component } from 'react'
import { observer } from 'mobx-react';
import './pageElements.scss'
import mainStore from "../../mainStore";
import { Button, Input } from "reactstrap";


const GithubPage = observer(class GithubPage extends Component {
	render() {
		return (
			<div className='auxBody'>
				<div className={'auxPage'}>
					<h1 onClick={() => mainStore.setPageName('Home')} className={'navigationH1'}><span>{"> "}</span>Back
					</h1>
					Github
				</div>
			</div>
		)
	}
});

export default GithubPage;
