import React, { Component } from 'react'

export default class App extends Component {
	/* 
		深入理解setState：
			setState()更新状态的2种写法：

				(1). setState(stateChange, [callback])------对象式的setState(常用)
								1.stateChange为状态改变对象(该对象可以体现出状态的更改)
								2.callback是可选的回调函数, 它在状态更新完毕、界面也更新后(render调用后)才被调用
								
				(2). setState(updater, [callback])------函数式的setState
								1.updater为返回stateChange对象的函数。
								2.updater可以接收到state和props,(state, props) => stateChange。
								3.updater接收到的state和props是最新的。
								4.callback是可选的回调函数, 它在状态更新、界面也更新后(render调用后)才被调用

			总结:
					1.对象式的setState是函数式的setState的简写方式(语法糖)
					2.使用原则：
							(1).如果新状态不依赖于原状态 ===> 使用对象方式
							(2).如果新状态依赖于原状态 ===> 使用函数方式
							(3).如果需要在setState()执行后获取最新的状态数据, 要在第二个callback函数中读取
	*/
	
	state = {count:0}

	add = ()=>{

		//第一种：对象式的setState
		const {count} = this.state //获取原状态
		this.setState({count:count+1}) //更新状态
		console.log(this.state.count) //0

		//第二种：函数式的setState（推荐，因为设置的状态值，依赖于原状态）
		//this.setState((state,props)=>({count:state.count+1})) 
	}

	setNumber = ()=>{

		//第一种：对象式的setState（推荐，因为设置的状态值，不依赖于原状态）
		//this.setState({count:100})

		//第二种：函数式的setState
		this.setState(()=>({count:100}))
	}
	
	render() {
		console.log('render被调用了');
		return (
			<div>
				<h1>当前求和为：{this.state.count}</h1>
				<button onClick={this.add}>点我+1</button>
				<button onClick={this.setNumber}>点我直接设置和为100</button>
			</div>
		)
	}
}

