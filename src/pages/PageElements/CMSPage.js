import React, { Component } from 'react'
import { observer } from 'mobx-react';
import { Button, Dropdown, DropdownItem } from 'reactstrap';
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
					<div className={'cmsNavBar'}>
						hi Iam the nav Bar
						<Button className={'navBarButton'} onClick={()=>mainStore.setPageName('Home')}>
							{'Home Page'}
						</Button>
						<Button className={'navBarButton'} onClick={()=>mainStore.setPageName('AboutMe')}>
							{'About Me Page'}
						</Button>
						<Button className={'navBarButton'} onClick={()=>mainStore.setPageName('Video')}>
							{'Videos Page'}
						</Button>
						<Button className={'navBarButton'}>
							{'Video List'}
						</Button>
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
