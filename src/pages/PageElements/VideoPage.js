import React, { Component } from 'react'
import { observer } from 'mobx-react';
import './pageElements.scss'
import mainStore from "../../mainStore";
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import { coordinateTable } from "../../variables";
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
	}

	render() {
		const { overlay,location } = this.state;
		return (
			<div className='auxBody'>

				{overlay?(<div className={'Overlay'}>
						<span>{location}</span>
						<div className={'auxButton'}>
							<h1 onClick={() => this.overlayState(false,'')} className={'navigationH1'}><span>{"> "}</span>Close</h1>
						</div>
				</div>)
				:(<div>
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
							<div className={'videoDiv'}>
								<Map
									style="mapbox://styles/mapbox/light-v9"
									center={[151.2055832, -33.8780926]}
									containerStyle={{
										height: '100%',
										width: '90%'
									}}
									zoom={[10.5]}
								>
									<Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
										{
											coordinateTable.map((e) => (
												<Feature onClick={() => this.overlayState(true,e.location)}
														 coordinates={e.coordinate}/>
											))}
									</Layer>
								</Map>
							</div>
							<div className={'videoDiv'}>
								<iframe title={'showreelvideo'} id={'showreel'} width="100%" height="100%"
										src="https://www.youtube.com/embed/IZEM1jpcEhY"
										frameBorder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen/>
							</div>
							<div className={'videoDiv'}>
								<iframe title={'showreelvideo'} id={'showreel'} width="100%" height="100%"
										src="https://www.youtube.com/embed/zkXsZZUtjCs"
										frameBorder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen/>
							</div>
							<div className={'videoDiv'}>
								<iframe title={'showreelvideo'} id={'showreel'} width="100%" height="100%"
										src="https://www.youtube.com/embed/jDH-Pn58TYU"
										frameBorder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen/>
							</div>

						</div>
					</div>
				</div>)}

			</div>
		)
	}
});

export default VideoPage;
