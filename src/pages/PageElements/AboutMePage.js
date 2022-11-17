import React, { Component } from 'react'
import { observer } from 'mobx-react';
import '../../StyleSheets/pageElements.scss'
import mainStore from "../../mainStore";
import { ArrowLeftCircle } from "react-feather";

const AboutMePage = observer(class AboutMePage extends Component {
	render() {
		return (
			<div className='auxBody'>
				<div id={'auxChild'} className={'auxChild'}>
					<div className={'auxNavigation'}>
						<div className={'auxButton'}>
							<h1 onClick={() => mainStore.setPageName('Home')} className={'navigationH1'}>
								<ArrowLeftCircle className={'ArrowCircle'}/>Back</h1>
						</div>
					</div>
					<div className={'auxPage'}>
						<div className={'auxTitle'}>About Me</div>
						<div className={'paragraphBlockText'}>
							<p className={'paragraph'}>
								I am a 25 year old male that graduated from the University of Sydney with a <b>Bachelor
								of Computer Science</b> in 2019.
							</p>
							<p className={'paragraph'}>I spent a year working in 2020 during COVID working at a company
								called <b>Leigo Industries</b> where most of the time was spent developing
								my skills using <b>ReactJS and MobX</b> working on client projects and internal
								projects, building user interfaces, websites and admin panels.
							</p>
							<p className={'paragraph'}>From 2021 till now I have been working at a company called <b>Process Creative</b> where I have been
								<ul>
									<li>
										Mentoring Junior Developers, including pair programming and integrating applications for a client.
									</li>
									<li>
										Reviewing and ensuring quality control of other developers' code, 
										including projects written in Liquid/Typescript or ReactJS/GraphQL based query language.
									</li>
									<li>
									Building websites and features for clients on a retainer basis, 
									focussing on project management and implementation using HTML and the Shopify templating language, Liquid.
									</li>
									<li>
										Modernising client websites by improving usability and consolidating functionality to make the experience feel like a single page storefront, 
										which includes leveraging Typescript to extend the server-side rendered Shopify Liquid codebase. 
										This unblocked the team to build custom functionality such as Cart Drawers and Mega Menus that otherwise would not work without Javascript/Typescript.
									</li>
									<li>
										Building headless websites using ReactJS. As the Project Lead, 
										I led two other developers in code standards and building components in a modular way to encourage reusability. 
										Aside from following engineering best practices for ReactJS, 
										I also have experience in writing queries for the Sanity Content Management System.
									</li>
									<li>
										Leading and integrating the Sanity Content Management System with the Shopify headless website. 
										I was the Project Lead on this website, and I was responsible for delivering robust designs and code within a set timeline.
									</li>
								</ul>

								Some Sites that I've worked on include.
								<a href="https://ak-racing.com.au/">AK Racing/DX Racer</a> 
								<a href="https://tryboredcow.com/ ">Bored Cow</a>
								<a href="https://hushanesthetic.com/">Hush Anesthetics</a>
								<a href="https://stonex.com.au/ ">Stone X Tools</a>



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
