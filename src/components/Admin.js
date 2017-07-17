import React, {	Component } from 'react';
import Header from './Header';
import Left from './Left';
import Right from './Right';
class Admin extends Component {
	render() {
		return(
			<div className="container">
				<div className="row">
					<Header />
				</div>
				<div className="row">
					<Left />
					<Right />
				</div>
			</div>
		);
	}
}

export default Admin;
//ReactDOM.render(<Admin />, document.getElementById('root'));
