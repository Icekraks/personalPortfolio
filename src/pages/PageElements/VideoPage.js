import React, { Component } from 'react'
import { observer } from 'mobx-react';
import './pageElements.scss'
import mainStore from "../../mainStore";


const VideoPage = observer(class VideoPage extends Component {
	render() {
		return (
			<div className='auxBody'>
				<div className={'auxNavigation'}>
					<div className={'auxButton'}>
						<h1 onClick={() => mainStore.setPageName('Home')} className={'navigationH1'}><span>{"> "}</span>Back</h1>
					</div>
				</div>
				<div className={'auxPage'}>
					<div className={'auxTitle'}>Videography</div>
					<div className={'paragraphBlock'}>
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

			</div>
		)
	}
});

export default VideoPage;
