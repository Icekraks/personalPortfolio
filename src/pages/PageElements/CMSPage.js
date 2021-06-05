import React, { Component } from 'react'
import { observer } from 'mobx-react';
import {Button} from 'reactstrap';
import mainStore from "../../mainStore";
import '../../StyleSheets/pageElements.scss';
import '../../StyleSheets/CMS.scss';
import { getLocalToken, signOut, validateCredentials } from "../../api";

const LoginPage = observer(class LoginPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			loaded: false,



		}
	}

	async componentDidMount() {
		const validation = await validateCredentials(getLocalToken());
		if(!validation){
			mainStore.setPageName('Home')
		}
		this.setState({ loaded: true });
	}


	render(){
		const { loaded } = this.state;
		if (!loaded) {
			return null;
		}
		return(
			<div className='cmsBody'>
				<div id={'cmsChild'} className={'cmsChild'}>
					{/*<div className={'auxNavigation'}>*/}
					{/*	<div className={'auxButton'}>*/}
					{/*		<h1 onClick={() => mainStore.setPageName('Home')} className={'navigationH1'}>*/}
					{/*			<ArrowLeftCircle className={'ArrowCircle'}/>Back</h1>*/}
					{/*	</div>*/}
					{/*</div>*/}
					<div className={'cmsNavBar'}>
						hi Iam the nav Bar
						{
							[...Array(10)].map((x,i)=>(
								<Button className={'navBarButton'}>
									{`nav${i}`}
								</Button>
								)

							)
						}
						<Button className={'navBarButton'} style={{marginTop: 'auto'} } onClick={signOut}>
							Logout
						</Button>

					</div>
					<div className={'auxPage'}>
						<div className={'auxTitle'}>CMS Page</div>
						<div className={'paragraphBlock'}>
							WORK IN PROGRESS CMS
						</div>
					</div>
				</div>
			</div>
		)
	}

});

export default LoginPage;
