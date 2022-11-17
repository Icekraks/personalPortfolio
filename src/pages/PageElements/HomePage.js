import React, { Component } from 'react'
import { observer } from 'mobx-react';
import '../../StyleSheets/Home.scss';
import mainStore from "../../mainStore";
import { felixData } from '../../variables'
import { Terminal, ChevronRight, Frown } from "react-feather";
import { getAllUsers, testAPI } from "../../api";


const HomePage = observer(class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: true,
			loaded: false,
			pageName: 'Home',
		}
	}

	async componentDidMount() {
		// let data = getStats('IcekraksIG');
		this.setState({ loaded: true })
		this.displayName('Felix Hu')
		setTimeout(()=>{
			this.closeName();
		},10000)
		// let users = await getAllUsers();
		// console.log(users);
	}

	displayName = (displayName) => {
		mainStore.setUserName('');
		let tab = [...displayName];
		tab.forEach((letter, i) => {
			setTimeout(() => {
				mainStore.appendUserName(letter);
			}, i * 200);
		});
	}

	closeName = () => {
		const { visible } = this.state;

		if (visible === true) {
			this.setState({
				visible: false,
			})
			this.displayString(felixData);
		}

	}

	displayString = (data) => {


		let whoami = [[...data.amITitle], [...data.apiTitle2], [...data.apiTitle3], [...data.apiTitle4], [...data.amIString]];


		for (let z = 0; z < whoami.length - 1; z++) {
			mainStore.setTitle(z, '');
			whoami[z].forEach((letter, i) => {
				setTimeout(() => {
					mainStore.appendTitle(z, letter);
				}, i * 200);
			});
		}
		mainStore.setParagraph('');
		whoami[4].forEach((letter, i) => {
			setTimeout(() => {
				mainStore.appendParagraph(letter);
			}, i * 200);
		});

	}

	swapPage = (title) => {
		switch (title) {
			case 1:
				mainStore.setPageName('AboutMe');
				break;
			case 2:
				mainStore.setPageName('Video');
				break;
			case 3:
				window.open('https://github.com/Icekraks', '_blank');
				break;
			case 4:
				console.log('runescape');
				break;
			case 5:
				// console.log('HELLO IAM WORK IN PROGRESS');
				mainStore.setPageName('Login');
				break;
			default:
				mainStore.setPageName('Home');
		}
	}

	callApiTest = async ()=>{
		let data = await testAPI('videos');
		console.log(data);
	}





	render() {
		const { visible, loaded } = this.state;


		if (!loaded) {
			return null;
		}
		let continueClick = window.document;
		continueClick.addEventListener('click', this.closeName);
		return (
			<div className='homeBody'>
				{visible ? null :
					<div className={'ee'}>
						<Terminal className={'terminalIcon'}
								  // onClick={()=>this.swapPage(5)}
						/>
						{/*<Frown className={'terminalIcon'} onClick={()=>this.callApiTest()}/>*/}
					</div>

				}
				<div className={visible ? 'LandingPage' : 'fadeOut'}>
					<div className={'OverlayTitle'}>
						<span id='textBlock'
							   className={'textBlock'}>
						<ChevronRight className={ 'chevronRight, titleChevron'}/>
						{mainStore.userName}
						<div style={{ padding: '5px', display: 'inline' }}>
							<div id="cursor" style={{ display: 'inline' }}/>
						</div>
					</span>
					</div>
					<div id={'hint'} className={'hint'}>
						Click On My Name
					</div>
				</div>
				<div className={visible ? 'mainElementsHidden' : 'mainElements'}>
					<div className={'mainRow'}>
						<div className={'mainQuadrant'}>
							<div onClick={() => this.swapPage(1)} className={'titleButton'}>
								<h1 className={'navigationH1'}><ChevronRight className={ 'chevronRight'}/>{mainStore.title1}</h1>
							</div>
							<div className={'paragraphBlock'}>
								<p className={'paragraph'}>
									I am a 24 year old male that graduated from the University of Sydney with a <b>Bachelor
									of Computer Science</b> in 2019.
								</p>
								<p className={'paragraph'}>I spent a year working in 2020 during Covid working at a
									company called <b>Leigo Industries</b> where most of the time was spent developing
									my skills using ReactJS and MobX working on client projects and internal projects.
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
									My other hobbies include building Computers, Videography, Photography and Cars.
								</p>
							</div>
						</div>
						{/*<div className={'mainQuadrant'}>*/}
						{/*	<h1 onClick={()=>this.swapPage(4)} className={'navigationH1'}><span>{"> "}</span>{mainStore.title2}</h1>*/}
						{/*	<Input placeholder={'Oldschool Runescape Username'} value={mainStore.osrsUsername}*/}
						{/*		   onChange={(e) => mainStore.setOsrsUsername(e.target.value)}/>*/}
						{/*	<div className={'buttonDiv'}>*/}
						{/*		<Button className={'statButton'} onClick={() => this.displayStats()}>Show Stats</Button>*/}
						{/*	</div>*/}
						{/*	<DataTable columns={rsTable} data={mainStore.tableStats}*/}
						{/*			   noDataComponent={<p>There Are No Stats to Display</p>}/>*/}

						{/*</div>*/}
					</div>
					<div className={'mainRow'}>
						<div className={'mainQuadrant'}>
							<div onClick={() => this.swapPage(2)} className={'titleButton'}>
								<h1 onClick={() => this.swapPage(2)} className={'navigationH1'}>
									<ChevronRight className={ 'chevronRight'}/>{mainStore.title3}</h1>
							</div>
							<div className={'paragraphBlock'}>
								<div className={'youtubeEmbed'}>
									<iframe title={'showreelvideo'} id={'showreel'} width="100%" height="100%"
											src="https://www.youtube.com/embed/IZEM1jpcEhY"
											frameBorder="0"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
											allowFullScreen/>
								</div>
							</div>
						</div>
						<div className={'mainQuadrant'}>
							<div onClick={() => this.swapPage(3)} className={'titleButton'}>
								<h1 onClick={() => this.swapPage(3)} className={'navigationH1'}>
									<ChevronRight className={ 'chevronRight'}/>{mainStore.title4}</h1>
							</div>
							<div className={'paragraphBlock'}>
								<p className={'paragraph'}>
									My Github is where all my projects are hosted including this portfolio
									if you want to have a look. It varies from uni work to personal projects or tools,
									that I have used.
								</p>
							</div>
						</div>
					</div>

				</div>
			</div>
		)
	}
});

export default HomePage;
