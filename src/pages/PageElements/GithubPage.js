import React, { Component } from 'react'
import { observer } from 'mobx-react';
import './pageElements.scss'
import mainStore from "../../mainStore";

const GithubPage = observer(class GithubPage extends Component {
	render() {
		return (
			<div className='auxBody'>
				<div className={'auxNavigation'}>
					<div className={'auxButton'}>
					<h1 onClick={() => mainStore.setPageName('Home')} className={'navigationH1'}><span>{"> "}</span>Back</h1>
					</div>
				</div>
				<div className={'auxPage'}>
					<div className={'auxTitle'}>Github</div>
				</div>

			</div>
		)
	}
});

export default GithubPage;
