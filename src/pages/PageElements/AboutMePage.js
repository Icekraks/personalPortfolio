import React, { Component } from 'react'
import { observer } from 'mobx-react';
import './pageElements.scss'
import mainStore from "../../mainStore";

const AboutMePage = observer(class AboutMePage extends Component {
	render() {
		return (
			<div className='auxBody'>
				<div id={'auxChild'} className={'auxChild'}>
					<div className={'auxNavigation'}>
						<div className={'auxButton'}>
							<h1 onClick={() => mainStore.setPageName('Home')} className={'navigationH1'}>
								<span>{"> "}</span>Back</h1>
						</div>
					</div>
					<div className={'auxPage'}>
						<div className={'auxTitle'}>About Me</div>
						<div className={'paragraphBlock'}>
							<p className={'paragraph'}>
								I am a 23 year old male that graduated from the University of Sydney with a <b>Bachelor
								of Computer Science</b> in 2019.
							</p>
							<p className={'paragraph'}>I spent a year working in 2020 during COVID working at a company
								called <b>Leigo Industries</b> where most of the time was spent developing
								my skills using <b>ReactJS and MobX</b> working on client projects and internal
								projects.
							</p>
							<p className={'paragraph'}>
								I have since left the company due to financial issues but 2020 has taught me how to
								build user interfaces, websites and admin panels.
							</p>
							<p className={'paragraph'}>
								I have also other skills besides the Javascript/ReactJS/MobX, in Java and C++ as those
								were fundamentals taught at University.
								My main focus is on Javascript and Web Development for the front end with user
								interfaces and usability in mind,
								as that is what I enjoy.
							</p>
							<p className={'paragraph'}>
								My other hobbies include <b>building Computers, Videography, Photography and Cars</b>.
							</p>
							<p className={'paragraph'}>
								I have been filming video and taking photos since 2016 and have gather skills and gear
								throughout the years through self learning via the internet
								and experimenting. I have also self taught myself video editing in <b>Adobe Premiere
								Pro</b> and <b>Adobe After Effects</b> putting together cinematic
								pieces for my satisfaction and others to watch.
							</p>
						</div>
					</div>
				</div>

			</div>
		)
	}
});

export default AboutMePage;
