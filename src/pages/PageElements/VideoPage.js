import React, { Component } from 'react'
import { observer } from 'mobx-react';
import './pageElements.scss'
import mainStore from "../../mainStore";
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import { coordinateTable } from "../../variables";
import { ArrowLeftCircle,ArrowRightCircle } from "react-feather";

import 'mapbox-gl/dist/mapbox-gl.css';


const Map = ReactMapboxGl({
	accessToken:
		'pk.eyJ1IjoiaWNla3Jha3MiLCJhIjoiY2tuNDhic3U5MW93ejJubnp1OW92NmVkOCJ9.IIcLN4Ah-LS9yFuTX4y1VA'
});

const VideoPage = observer(class VideoPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			overlay: false,
			location:'',
		}
	}

	openYoutube = () => {
		window.open('https://www.youtube.com/channel/UCWx3bqTrPhhx6XmRFt1hR2w', '_blank');

	}
	overlayState = (state,loc) =>{
		this.setState({
			overlay: state,
			location: loc
		})
		if(state) {
			document.getElementById('overlay').style.display = 'flex';
			document.getElementById('videoBody').style.display = 'none';
		} else {
			document.getElementById('overlay').style.display='none';
			document.getElementById('videoBody').style.display='flex';
		}
	}

	render() {
		const { location } = this.state;
		return (
			<div className='auxBody'>

				<div id={'overlay'} className={'overlay'}>

					<div className={'overlayNavigation'}>
						<div className={'overlayButton'}>
							<h1 onClick={() => this.overlayState(false,'')} className={'overlayH1'}><ArrowLeftCircle className={'ArrowCircle'}/>Close</h1>
						</div>
					</div>
					<div className={'overlayPage'}>
						<div className={'auxTitle videoTitle'}>{location.location}</div>
						<div className={'videoDivOverlay'}>
							<iframe title={'showreelvideo'} id={'showreel'} width="100%" height="100%"
									src={location.link}
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen/>
						</div>
					</div>
				</div>

				<div id={'videoBody'} className={'auxChild'}>
					<div className={'auxNavigation'}>
						<div className={'auxButton'}>
							<h1 onClick={() => mainStore.setPageName('Home')} className={'navigationH1'}>
								<ArrowLeftCircle className={'ArrowCircle'}/>Back
							</h1>
						</div>
					</div>
					<div className={'auxPage'}>
						<div className={'auxTitle'}>Videography</div>
						<div className={'secondaryNav'}>
							<div className={'auxButton'}>
								<h1 onClick={() => this.openYoutube} className={'navigationH1'}><ArrowRightCircle className={'ArrowCircle'}/>Link
									to
									Youtube Channel</h1>
							</div>
						</div>


						<div className={'paragraphBlock'}>
							<div className={'mapDiv'}>

								<Map
									style="mapbox://styles/mapbox/dark-v10"
									center={[151.0732534,-33.8712938]}
									containerStyle={{
										height: '100%',
										width: '100%'
									}}
									zoom={[10.5]}
								>
									<Layer type="symbol" id="marker" layout={{ 'icon-image': 'attraction-15' }}>
										{
											coordinateTable.map((e) => (
												<Feature onClick={() => this.overlayState(true,e)}
														 coordinates={e.coordinate}/>
											))}
									</Layer>
								</Map>
								<span style={{paddingTop:'10px'}}>Click Map Markers to See Individual Videos.</span>
							</div>
							<div className={'videoDiv'}>
								<iframe title={'showreelvideo'} id={'showreel'} width="100%" height="100%"
										src="https://www.youtube.com/embed/IZEM1jpcEhY"
										frameBorder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen/>
							</div>
						</div>
					</div>
				</div>

			</div>
		)
	}
});

export default VideoPage;
