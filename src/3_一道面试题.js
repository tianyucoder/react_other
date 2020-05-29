import React, { Component } from 'react'

export default class App extends Component {

	state = {
		count: 0,
	}

	componentDidMount() {

		this.setState({count: this.state.count + 1}) 
		this.setState({count: this.state.count + 1}) //+1 异步
		console.log(this.state.count)

		this.setState(state => ({count: state.count + 1}))//+1 异步
		this.setState(state => ({count: state.count + 1}))//+1 异步
		console.log(this.state.count)

		setTimeout(() => {
			this.setState({count: this.state.count + 1}) //+1 同步
			console.log('timeout', this.state.count)

			this.setState({count: this.state.count + 1})//+1 同步
			console.log('timeout', this.state.count) 
		},0)

		Promise.resolve().then(() => {
			this.setState({count: this.state.count + 1}) //+1 同步
			console.log('promise', this.state.count)

			this.setState({count: this.state.count + 1})//+1 同步
			console.log('promise', this.state.count)
		})
	}

	render() {
		console.log('render', this.state.count) //0
		return (
			<div>
				<p>{this.state.count}</p>
			</div>
		)
	}
}
