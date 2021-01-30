import React, {Component} from 'react'
import {observer} from 'mobx-react';
import './Home.scss';
import mainStore from "../../mainStore";

const name = "Felix Hu";

const Home = observer(class Home extends Component{
	constructor(props) {
		super(props);
		this.state = {
			visible:true
		}
	}

	async componentDidMount() {
		setTimeout(this.displayName,3000,name);
	}

	displayName=(displayName)=>{
		mainStore.setUserName('');
		let tab = [...displayName];
		tab.forEach((letter, i) => {
			setTimeout(() => {
				mainStore.appendUserName(letter);
			},  i * 200);
		});
	}

	closeName = () => {
		this.setState({
			visible: false,
		})
	}

	render(){

		let continueClick = window.document;
		continueClick.addEventListener('click',this.closeName);
		// continueClick.addEventListener('keypress', function (e) {
		// 	if (e.key === 'Enter') {
		// 		this.closeName();
		// 	}
		// });

		return(
			<div className='BodyElement'>
				<div className='homeBody'>
					<span id='textBlock' className={this.state.visible?'textBlock':'fadeOut'}><span>{">"}</span> {mainStore.userName} <div style={{padding:'5px',display:'inline'}}><div id="cursor" style={{display:'inline'}}></div></div></span>


					{/*<Button onClick={()=>this.displayName('Hu Felix')}>Press Me</Button>*/}
				</div>

			</div>
		)
	}
});


export default Home;
