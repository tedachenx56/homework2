import React, {	Component } from 'react';
//import logo from './logo.svg';
//import './Login.css';

class Login extends Component {
	render() {
		return(
			<div className="Login">
				<div className="username">
					<span className="username_t">用户名： </span>
					<input type="text" name="username" />
				</div>
				<div className="username">
					<span className="password_t">密&nbsp;&nbsp;码：</span>
					<input type="tele" name="password" />
				</div>
			</div>
		);
	}
}

export default Login;