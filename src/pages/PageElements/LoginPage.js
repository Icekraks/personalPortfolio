import React, { Component } from 'react'
import { observer } from 'mobx-react';
import mainStore from "../../mainStore";
import { ArrowLeftCircle } from "react-feather";
import {Form,Input,Label,FormGroup,Button} from 'reactstrap';
import '../../StyleSheets/pageElements.scss';
import { getLocalToken, signIn, validateCredentials } from "../../api";

const LoginPage = observer(class LoginPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
			username:'',
			password: '',
			attribute:false,



		}
	}

	async componentDidMount() {
		const localToken = getLocalToken();

		if(localToken!==null){
			const validation = await validateCredentials(localToken);
			if(validation) {
				mainStore.token = localToken;
				mainStore.setPageName('CMSPage');
			}
		}
		this.setState({ loaded: true })
	}

	submitLogin = async (e)=>{
		e.preventDefault();
		const {username,password} = this.state;
		console.log(username,password);
		let validation = await signIn(username,password);

		console.log(validation);
		if(validation!==null) {
			mainStore.setPageName('CMSPage')
		}
	}

	render(){
		const { loaded,attribute } = this.state;
		if (!loaded) {
			return null;
		}
		return(
			<div className='auxBody'>
				<div id={'auxChild'} className={'auxChild'}>
					<div className={'auxNavigation'}>
						<div className={'auxButton'}>
							<h1 onClick={() => mainStore.setPageName('Home')} className={'navigationH1'}>
								<ArrowLeftCircle className={'ArrowCircle'}/>Back</h1>
						</div>
					</div>
					<div className={'auxPage'}>
						<div className={'auxTitle'}>Login</div>
						<div className={'paragraphBlock'}>
							<Form onSubmit={(e)=>this.submitLogin(e)} className={'loginForm'}>
								<FormGroup className={'loginFormGroup'}>
									<Label>Username</Label>
									<br/>
									<Input onChange={(e)=>{this.setState({
										username: e.target.value
									})}}/>
								</FormGroup>
								<FormGroup className={'loginFormGroup'}>
									<Label>Password</Label>
									<br/>
									<Input id='passwordField' type='password' onChange={(e)=>this.setState({
										password: e.target.value
									})}/>

								</FormGroup>
								<Button onClick={
									()=>{
										if(!attribute){
											document.getElementById('passwordField').setAttribute('type', 'text')
											this.setState({
												attribute:true
											})
										}else {
											document.getElementById('passwordField').setAttribute('type','password')
											this.setState({
												attribute:false
											})
										}
									}
								}>{attribute===false?'Show Password':'Hide Password'}</Button>
								<Button type='submit' id='submitButton'>Login</Button>
							</Form>
						</div>
					</div>
				</div>
			</div>
		)
	}

});

export default LoginPage;
