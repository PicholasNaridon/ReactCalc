import React, { Component } from 'react';
import * as math from 'mathjs';
import CalcButton from './CalcButton';

class Calc extends Component {
	constructor(props) {
		super(props);
		this.state = {
			result: '',
			num0: '',
			num1: '',
			op: null
		};
	}

	clickHandler = (val, type) => {
		if (type === 'num' && !this.state.op) {
			this.handleNum(0, val);
		}
		if (type === 'num' && this.state.op) {
			this.handleNum(1, val);
		}
		if (type === 'op') {
			this.handleOp(val);
		}
		if (type === 'equ') {
			this.handleEq();
		}
		if (type === 'clear') {
			this.clearAll();
		}
	};

	handleNum = (num, val) => {
		switch (num) {
			case 0:
				this.setState((prevState) => ({
					num0: (prevState.num0 += val.toString()),
					result: this.state.num0
				}));
				break;
			case 1:
				this.setState((prevState) => ({
					num1: (prevState.num1 += val.toString()),
					result: this.state.num1
				}));
				break;
			default:
				console.log('bleh');
		}
	};

	handleOp(op) {
		this.setState({
			op: op,
			result: op
		});
	}

	clearAll = () => {
		this.setState({
			result: 0,
			num0: '',
			num1: '',
			op: null
		});
	};

	handleEq = () => {
		var result = math.eval(`${this.state.num0} ${this.state.op} ${this.state.num1}`);
		this.setState({
			result: result,
			num0: '',
			num1: '',
			op: null
		});
	};

	render() {
		return (
			<div>
				<h1>
					<input placeholder={this.state.result} style={{ width: '180px' }} />
				</h1>
				<table>
					<tbody>
						<tr>
							<td>
								<CalcButton clickHandler={this.clickHandler} bstyle="info" val={1} type="num" />
							</td>
							<td>
								<CalcButton clickHandler={this.clickHandler} bstyle="info" val={2} type="num" />
							</td>
							<td>
								<CalcButton clickHandler={this.clickHandler} bstyle="info" val={3} type="num" />
							</td>
							<td>
								<CalcButton clickHandler={this.clickHandler} val="+" bstyle="warning" type="op" />
							</td>
						</tr>
						<tr>
							<td>
								<CalcButton clickHandler={this.clickHandler} bstyle="info" val={4} type="num" />
							</td>
							<td>
								<CalcButton clickHandler={this.clickHandler} bstyle="info" val={5} type="num" />
							</td>
							<td>
								<CalcButton clickHandler={this.clickHandler} bstyle="info" val={6} type="num" />
							</td>
							<td>
								<CalcButton clickHandler={this.clickHandler} val="-" bstyle="warning" type="op" />
							</td>
						</tr>
						<tr>
							<td>
								<CalcButton clickHandler={this.clickHandler} bstyle="info" val={7} type="num" />
							</td>
							<td>
								<CalcButton clickHandler={this.clickHandler} bstyle="info" val={8} type="num" />
							</td>
							<td>
								<CalcButton clickHandler={this.clickHandler} bstyle="info" val={9} type="num" />
							</td>
							<td>
								<CalcButton clickHandler={this.clickHandler} val="*" bstyle="warning" type="op" />
							</td>
						</tr>
						<tr>
							<td>
								<CalcButton clickHandler={this.clickHandler} val="c" bstyle="danger" type="clear" />
							</td>
							<td>
								<CalcButton clickHandler={this.clickHandler} val={0} bstyle="info" type="num" />
							</td>
							<td>
								<CalcButton clickHandler={this.clickHandler} val="=" bstyle="success" type="equ" />
							</td>
							<td>
								<CalcButton clickHandler={this.clickHandler} val="/" bstyle="warning" type="op" />
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default Calc;
