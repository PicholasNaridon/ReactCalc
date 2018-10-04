import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class CalcButton extends Component {
	click = () => {
		this.props.clickHandler(this.props.val, this.props.type);
	};
	render() {
		return (
			<Button bsStyle={this.props.bstyle} bsSize="large" onClick={this.click}>
				{this.props.val}
			</Button>
		);
	}
}

export default CalcButton;
