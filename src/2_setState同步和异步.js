import React, { Component } from 'react'

export default class App extends Component {
/*
	setState()更新状态的动作是异步还是同步的?----看它执行的位置

		setState()执行位置对其动作的影响：
				(1). 在由react所控制的回调函数中更新的动作是【异步】的: 生命周期勾子 / react事件监听回调 
				(2). 非react控制的异步回调函数中更新的动作是【同步】的: 定时器回调 / 原生事件监听回调 / promise回调 /

		关于异步的setState()多次调用的问题
				(1). 多次调用, 如何处理?
								(a).若是对象式的setState,即：setState({})
											多次更新状态的动作合为一次(且以最后一次为准), 所以自然也就调用一次render()去更新界面。
											【简记：更新的动作，和render的调用，均合并为一次,且以最后一次为准】
								(b).若是函数式的setState,即：setState(updater): 
											每次更新的动作都生效(更新动作不合并), 但要注意的是：只调用一次render()更新界面。
											【简记： 更新状态的动作没有合并, 但render合并了】
				(2). 如何得到异步更新后的状态数据?
						 		在setState()的callback回调函数中
*/

	state = {
		count: 0,
	}

	//react生命周期勾子中, setState()执行更新的动作是【异步】的
	componentDidMount () {
		// console.log('setState之前',this.state.count);
		// this.setState({count:1})
		// console.log('setState之后',this.state.count);
	}

	//react的事件监听回调中, setState()执行更新的动作是【异步】的
	update1 = () => {
		// console.log('setState之前',this.state.count);
		// this.setState({count:1})
		// console.log('setState之后',this.state.count);
	}

	//定时器回调中setState()执行更新的动作是【同步】的
	update2 = () => {
		// setTimeout(()=>{
		// 	console.log('setState之前',this.state.count);
		// 	this.setState({count:1})
		// 	console.log('setState之后',this.state.count);
		// },100)
	}

	//原生事件监听回调中setState()执行更新的动作是【同步】的
	update3 = () => {
		// this.refs.demo.onclick = ()=>{
		// 	console.log('setState之前',this.state.count);
		// 	this.setState({count:1})
		// 	console.log('setState之后',this.state.count);
		// }
	}

	//promise回调中setState()执行更新的动作是【同步】的
	update4 = () => {
	/* 	Promise.resolve('ok').then(
			()=>{
				console.log('setState之前',this.state.count);
				this.setState({count:1})
				console.log('setState之后',this.state.count);
			},
		) */
	}

	/* ********************************************************************************** */

	/* 关于异步setState()多次调用的问题 */
	//在由react控制的回调update5中,连续2次调用setState({})
	update5 = () => {
		// console.log('setState之前',this.state.count);
		// this.setState({count:this.state.count+1})
		// this.setState({count:this.state.count+1})
		// console.log('setState之后',this.state.count);
	}

	//在由react控制的回调update6中,连续2次调用setState(fn)
	update6 = () => {
		// console.log('setState之前',this.state.count);
		// this.setState((state)=>({count:state.count+1}))
		// this.setState((state)=>({count:state.count+1}))
		// console.log('setState之后',this.state.count);
	}

	//在由react控制的回调update7中，连续2次调用setState,先对象式，后函数式
	update7 = () => {
		// console.log('setState之前',this.state.count);
		// this.setState({count:this.state.count+1})
		// this.setState((state)=>({count:state.count+1}))
		// console.log('setState之后',this.state.count);
	}

	//在由react控制的回调update8中,连续2次调用setState,先函数式,后对象式
	update8 = () => {
		console.log('setState之前',this.state.count);
		this.setState((state)=>({count:state.count+1}))
		this.setState({count:this.state.count+1})
		console.log('setState之后',this.state.count);
	}


	render() {
		console.log('render函数调用了',this.state.count)
		return (
			<div>
				<h2 ref="demo">当前求和为：{this.state.count}</h2>
				<button onClick={this.update1}>更新1</button> &nbsp;
				<button onClick={this.update2}>更新2</button> &nbsp;
				<button onClick={this.update3}>更新3</button> &nbsp;
				<button onClick={this.update4}>更新4</button> &nbsp;
				<button onClick={this.update5}>更新5</button> &nbsp;
				<button onClick={this.update6}>更新6</button> &nbsp;
				<button onClick={this.update7}>更新7</button> &nbsp;
				<button onClick={this.update8}>更新8</button> &nbsp;
			</div>
		)
	}
}
