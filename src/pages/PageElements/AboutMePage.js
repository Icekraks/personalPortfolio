import React, { Component } from 'react'
import { observer } from 'mobx-react';
import './pageElements.scss'
import mainStore from "../../mainStore";
import { Button, Input } from "reactstrap";


const AboutMePage = observer(class AboutMePage extends Component {
	render() {
		return (
			<div className='auxBody'>
				<div className={'auxPage'}>
					<h1 onClick={() => mainStore.setPageName('Home')} className={'navigationH1'}><span>{"> "}</span>Back
					</h1>
					about me
				</div>
			</div>
		)
	}
});

export default AboutMePage;
