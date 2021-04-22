import React, { Component } from 'react'
import { observer } from 'mobx-react';
import './pageElements.scss'
import mainStore from "../../mainStore";
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import { coordinateTable } from "../../variables";
import 'mapbox-gl/dist/mapbox-gl.css';


const Map = ReactMapboxGl({
	accessToken:
		'pk.eyJ1IjoiaWNla3Jha3MiLCJhIjoiY2tudGlva21kMDJ4MDJ3bHBjM2x3aHdpZSJ9._RkuRsMPu3s2flVuYh63Ug'
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
							<h1 onClick={() => this.overlayState(false,'')} className={'overlayH1'}><span>{"> "}</span>Close</h1>
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
								<span>{"> "}</span>Back
							</h1>
						</div>
					</div>
					<div className={'auxPage'}>
						<div className={'auxTitle'}>Videography</div>
						<div className={'secondaryNav'}>
							<div className={'auxButton'}>
								<h1 onClick={() => this.openYoutube} className={'navigationH1'}><span>{"> "}</span>Link
									to
									Youtube Channel</h1>
							</div>
						</div>


						<div className={'paragraphBlock'}>
							<div className={'mapDiv'}>
								<Map
									style="mapbox://styles/mapbox/light-v9"
									center={[151.0833132666856,-33.90518137171744]}
									containerStyle={{
										height: '100%',
										width: '100%'
									}}
									zoom={[10.5]}
								>
									<Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
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
