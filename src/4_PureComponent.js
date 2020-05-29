import React, { Component,PureComponent } from 'react'

	/*
		1. 我们习惯使用的Component存在哪些问题？
					(1).当组件执行了setState()，但state没有任何变化时，组件依然会调用自身的render。
					(2).当组件执行了setState(), 但state没有任何变化时，它的子组件也会重新执行render()。
					(3).当组件执行了render(), 它的子组件也会重新执行render(), 即使子组件根本没有用到任何父组件的东西。
					产生原因：组件的shouldComponentUpdate()默认返回true, 即使数据没有变化render()都会重新执行

		2. 解决Component存在的问题
					(1). 办法: 使用PureComponent代替Component
					(2). 说明: 一般都使用PureComponent来优化组件性能

		3. PureComponent的基本原理
					(1). 重写了shouldComponentUpdate()
					(2). 对组件的新/旧state和props中的数据进行浅比较, 如果没有变化, 返回false, 否则返回true

		4. 面试题:
					组件的哪个生命周期勾子能实现组件优化?
					PureComponent的原理?
					区别Component与PureComponent?
   */

class Father extends PureComponent{

	state = {
		car:{name:'奔驰'},
	}

	changeCar = ()=>{

		/* let car = {...this.state.car} //用于克隆一个对象
		car.name = '宝马'
		this.setState({car}) */

		this.setState({car:{name:'宝马'}})
	}

	render(){
		console.log('Father render()')
      return (
        <div>
					<h1>Father组件:</h1>
					<h3>自己的car.name={this.state.car.name}</h3>
          <button onClick={this.changeCar}>换车</button>
          <hr/>
          <Child car={this.state.car}/>
        </div>
      )
	}
} 

class Child extends PureComponent{
	state = {
		computer:{name:'联想'}
	}

	changeComputer = () => {
		this.setState({computer:{name:'华硕'}})
	}

	render() {
		console.log('Child render()')
		return (
			<div>
				<h1>Child组件: </h1>
				<button onClick={this.changeComputer}>换电脑</button>
				<h3>自己的computer.name={this.state.computer.name}</h3>
				<h3>Father的car.name={this.props.car.name}</h3>
			</div>
		)
	}
}

export default class App extends PureComponent {
	render(){
		return	<Father/>
	}
}
