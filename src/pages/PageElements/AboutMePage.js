import React, { Component } from 'react'
import { observer } from 'mobx-react';
import './pageElements.scss'
import mainStore from "../../mainStore";
import { Button, Input } from "reactstrap";


const AboutMePage = observer(class AboutMePage extends Component {
	render() {
		return (
			<div className='auxBody'>
				<div className={'auxNavigation'}>
					<div className={'auxButton'}>
						<h1 onClick={() => mainStore.setPageName('Home')} className={'navigationH1'}><span>{"> "}</span>Back</h1>
					</div>
				</div>
				<div className={'auxPage'}>
					<div className={'auxTitle'}>About Me</div>
					<div className={'paragraphBlock'}>
						<p className={'paragraph'}>
							I am a 23 year old male that graduated from the University of Sydney with a <b>Bachelor of Computer Science</b> in 2019.
						</p>
						<p className={'paragraph'}>I spent a year working in 2020 during Covid working at a company called <b>Leigo Industries</b> where most of the time was spent developing
							my skills using ReactJS and MobX working on client projects and internal projects.
						</p>
						<p className={'paragraph'}>
							I have since left the company due to financial issues but the year spent has taught me how to build user interfaces, websites and admin panels.
						</p>
						<p className={'paragraph'}>
							My other hobbies include building Computers, Videography, Photography and Cars.
						</p>
					</div>
				</div>

			</div>
		)
	}
});

export default AboutMePage;
