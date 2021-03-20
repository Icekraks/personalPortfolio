import React, { Component } from 'react'
import { observer } from 'mobx-react';
import '../HomePage/Home.scss';
import mainStore from "../../mainStore";
import { felixData, rsTable } from '../../variables'
import { hiscores } from 'osrs-json-api';
import { Button, Input } from "reactstrap";
import DataTable from "react-data-table-component";


const HomePage = observer(class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: true,
			loaded:false,
			pageName:'Home',
		}
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
	displayStats = async () => {
		console.log(mainStore.osrsUsername);
		let stats = await hiscores.getPlayer('IcekraksIG'
		);
		console.log(stats);
		// mainStore.setTableStats({})
	}

	swapPage = (title)=>{
		switch(title) {
			case 1:
				mainStore.setPageName('AboutMe');
				break;
			case 2:
				mainStore.setPageName('Video');
				break;
			case 3:
				mainStore.setPageName('Github');
				break;
			case 4:
				console.log('runescape');
				break;
			default:
				mainStore.setPageName('Home');
		}
	}


	async componentDidMount() {
		setTimeout(this.displayName, 3000, mainStore.name);
		console.log(mainStore.osrsStats);
		this.setState({loaded:true})
	}


	render(){
		const { visible,loaded } = this.state;

		if(!loaded){
			return null;
		}
		let continueClick = window.document;
		continueClick.addEventListener('click', this.closeName);
		return(
			<div className='homeBody'>
				<div>
					<span id='textBlock'
					  className={visible ? 'textBlock' : 'fadeOut'}><span>{">"}</span> {mainStore.userName}
					<div style={{ padding: '5px', display: 'inline' }}>
						<div id="cursor" style={{ display: 'inline' }}>
						</div>
					</div>
					</span>
				</div>
				<div className={visible ? 'mainElementsHidden' : 'mainElements'}>
					<div className={'mainRow'}>
						<div className={'mainQuadrant'}>
							<h1 onClick={()=>this.swapPage(1)} className={'navigationH1'}><span>{"> "}</span>{mainStore.title1}</h1>
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
						<div className={'mainQuadrant'}>
							<h1 onClick={()=>this.swapPage(4)} className={'navigationH1'}><span>{"> "}</span>{mainStore.title2}</h1>
							<Input placeholder={'Oldschool Runescape Username'} value={mainStore.osrsUsername}
								   onChange={(e) => mainStore.setOsrsUsername(e.target.value)}/>
							<div className={'buttonDiv'}>
								<Button className={'statButton'} onClick={() => this.displayStats()}>Show Stats</Button>
							</div>
							<DataTable columns={rsTable} data={mainStore.tableStats}
									   noDataComponent={<p>There Are No Stats to Display</p>}/>

						</div>
					</div>
					<div className={'mainRow'}>
						<div className={'mainQuadrant'}>
							<h1 onClick={()=>this.swapPage(2)} className={'navigationH1'}><span>{"> "}</span>{mainStore.title3}</h1>
							<div className={'youtubeEmbed'}>
								<iframe title={'showreelvideo'} id={'showreel'} width="100%" height="100%"
										src="https://www.youtube.com/embed/IZEM1jpcEhY"
										frameBorder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen/>
							</div>
						</div>
						<div className={'mainQuadrant'}>
							<h1 onClick={()=>this.swapPage(3)} className={'navigationH1'}><span>{"> "}</span>{mainStore.title4}</h1>
						</div>
					</div>

				</div>
			</div>
		)
	}
});

export default HomePage;