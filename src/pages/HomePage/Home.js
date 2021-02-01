import React, { Component } from 'react'
import { observer } from 'mobx-react';
import './Home.scss';
import mainStore from "../../mainStore";
import felixData from '../../variables'
import { updateRunescapeStats } from "./api";
import { Button } from "reactstrap";

const name = "Felix Hu";

const Home = observer(class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: true,
		}
	}

	async componentDidMount() {
		setTimeout(this.displayName, 3000, name);
		await updateRunescapeStats('IcekraksIG');
		console.log(mainStore.osrsStats);
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
	displayStats = () =>{
		console.log('stats pulled');
	}

	render() {

		const { visible } = this.state;

		let continueClick = window.document;
		continueClick.addEventListener('click', this.closeName);


		return (
			<div className='BodyElement'>
				<div className='homeBody'>
					<span id='textBlock'
						  className={visible ? 'textBlock' : 'fadeOut'}><span>{">"}</span> {mainStore.userName}
						<div style={{ padding: '5px', display: 'inline' }}><div id="cursor"
																				style={{ display: 'inline' }}></div></div></span>
					<div className={visible ? 'mainElementsHidden' : 'mainElements'}>
						<div className={'mainRow'}>
							<div className={'mainQuadrant'}>
								<h1 className={'navigationH1'}><span>{"> "}</span>{mainStore.title1}</h1>
								<p>
									<span>{"> "}</span>{mainStore.paragraph1}
								</p>
							</div>
							<div className={'mainQuadrant'}>
								<h1 className={'navigationH1'}><span>{"> "}</span>{mainStore.title2}</h1>
								<Button className={'statButton'} onClick={()=>this.displayStats()}>Show Stats</Button>
								<p><span>{"> "}</span>placeholder graph</p>

							</div>
						</div>
						<div className={'mainRow'}>
							<div className={'mainQuadrant'}>
								<h1 className={'navigationH1'}><span>{"> "}</span>{mainStore.title3}</h1>
								<div className={'youtubeEmbed'}>
									<iframe title={'showreelvideo'} id={'showreel'} width="100%" height="100%"
											src="https://www.youtube.com/embed/IZEM1jpcEhY"
											frameBorder="0"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
											allowFullScreen/>
								</div>
							</div>
							<div className={'mainQuadrant'}>
								<h1 className={'navigationH1'}><span>{"> "}</span>{mainStore.title4}</h1>
							</div>
						</div>

					</div>

				</div>

			</div>
		)
	}
});


export default Home;
