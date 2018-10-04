import React from 'react';
import { Button } from 'react-bootstrap';

const CalcButton = (props) => {
	return (
		<Button bsStyle={props.bstyle} bsSize="large" onClick={() => props.clickHandler(props.val, props.type)}>
			{props.val}
		</Button>
	);
};

export default CalcButton;
