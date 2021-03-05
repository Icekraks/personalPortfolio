import React, { Component } from 'react'
import { observer } from 'mobx-react';
import '../HomePage/Home.scss';
import mainStore from "../../mainStore";
import { felixData, rsTable } from '../../variables'
import { hiscores } from 'osrs-json-api';
import { Button, Input } from "reactstrap";
import DataTable from "react-data-table-component";


const AboutMePage = observer(class AboutMePage extends Component {
	render(){
		return(
			<div>
				<h1 onClick={()=>mainStore.setPageName('Home')} className={'navigationH1'}><span>{"> "}</span>Back</h1>
				about me
			{/*<span id='textBlock'*/}
			{/*	  className={visible ? 'textBlock' : 'fadeOut'}><span>{">"}</span> {mainStore.userName}*/}
			{/*	<div style={{ padding: '5px', display: 'inline' }}>*/}
			{/*		<div id="cursor" style={{ display: 'inline' }}>*/}
			{/*		</div>*/}
			{/*	</div>*/}
			{/*</span>*/}
			{/*	<div className={visible ? 'mainElementsHidden' : 'mainElements'}>*/}
			{/*		<div className={'mainRow'}>*/}
			{/*			<div className={'mainQuadrant'}>*/}
			{/*				<h1 className={'navigationH1'}><span>{"> "}</span>{mainStore.title1}</h1>*/}
			{/*				<p>*/}
			{/*					<span>{"> "}</span>{mainStore.paragraph1}*/}
			{/*				</p>*/}
			{/*			</div>*/}
			{/*			<div className={'mainQuadrant'}>*/}
			{/*				<h1 className={'navigationH1'}><span>{"> "}</span>{mainStore.title2}</h1>*/}
			{/*				<Input placeholder={'Oldschool Runescape Username'} value={mainStore.osrsUsername}*/}
			{/*					   onChange={(e) => mainStore.setOsrsUsername(e.target.value)}/>*/}
			{/*				<div className={'buttonDiv'}>*/}
			{/*					<Button className={'statButton'} onClick={() => this.displayStats()}>Show Stats</Button>*/}
			{/*				</div>*/}
			{/*				<DataTable columns={rsTable} data={mainStore.tableStats}*/}
			{/*						   noDataComponent={<p>There Are No Stats to Display</p>}/>*/}

			{/*			</div>*/}
			{/*		</div>*/}
			{/*		<div className={'mainRow'}>*/}
			{/*			<div className={'mainQuadrant'}>*/}
			{/*				<h1 className={'navigationH1'}><span>{"> "}</span>{mainStore.title3}</h1>*/}
			{/*				<div className={'youtubeEmbed'}>*/}
			{/*					<iframe title={'showreelvideo'} id={'showreel'} width="100%" height="100%"*/}
			{/*							src="https://www.youtube.com/embed/IZEM1jpcEhY"*/}
			{/*							frameBorder="0"*/}
			{/*							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
			{/*							allowFullScreen/>*/}
			{/*				</div>*/}
			{/*			</div>*/}
			{/*			<div className={'mainQuadrant'}>*/}
			{/*				<h1 className={'navigationH1'}><span>{"> "}</span>{mainStore.title4}</h1>*/}
			{/*			</div>*/}
			{/*		</div>*/}

			{/*	</div>*/}
			</div>
		)
	}
});

export default AboutMePage;
