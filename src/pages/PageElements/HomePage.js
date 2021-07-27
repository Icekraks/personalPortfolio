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
		this.setState({
			visible: false,
		})
		if (visible === true) {
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
						<Terminal className={'terminalIcon'} onClick={()=>this.swapPage(5)}/>
						<Frown className={'terminalIcon'} onClick={()=>this.callApiTest()}/>
					</div>

				}
				<div>

					<span id='textBlock'
						  className={visible ? 'textBlock' : 'fadeOut'}>
						<ChevronRight className={ 'chevronRight, titleChevron'}/>
						{mainStore.userName}
						<div style={{ padding: '5px', display: 'inline' }}>
							<div id="cursor" style={{ display: 'inline' }}/>
						</div>
					</span>
				</div>
				<div className={visible ? 'mainElementsHidden' : 'mainElements'}>
					<div className={'mainRow'}>
						<div className={'mainQuadrant'}>
							<div onClick={() => this.swapPage(1)} className={'titleButton'}>
								<h1 className={'navigationH1'}><ChevronRight className={ 'chevronRight'}/>{mainStore.title1}</h1>
							</div>
							<div className={'paragraphBlock'}>
								<p className={'paragraph'}>
									I am a 23 year old male that graduated from the University of Sydney with a <b>Bachelor
									of Computer Science</b> in 2019.
								</p>
								<p className={'paragraph'}>I spent a year working in 2020 during Covid working at a
									company called <b>Leigo Industries</b> where most of the time was spent developing
									my skills using ReactJS and MobX working on client projects and internal projects.
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
