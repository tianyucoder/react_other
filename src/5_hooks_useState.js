import React, { Component } from 'react'

//使用类形式定义组件
/* export default class App extends Component {

	state = {
		count:0
	}

	add = ()=>{
		this.setState((state)=>({count:state.count+1}))
	}

	render() {
		return (
			<div>
				<h1>当前的count值为:{this.state.count}</h1>
				<button onClick={this.add}>点我+1</button>
			</div>
		)
	}
} */

//使用函数式定义组件
export default function App (){
	console.log('@@@@----App-----@@@');
	const [count,setCount] = React.useState(0)
	const [name,setName] = React.useState('tom')

	function add(){
		setCount(count+1)
	}

	function change() {
		setName('张三')
	}
	
	return (
		<div>
			<h1>当前的count值为:{count}</h1>
			<h1>名字是:{name}</h1>
			<button onClick={add}>点我+1</button>
			<button onClick={change}>点我改名</button>
		</div>
	)
}
