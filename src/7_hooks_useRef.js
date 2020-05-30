import React, { Component,useState,useEffect,useRef} from 'react'
import ReactDOM from 'react-dom'

//使用类形式定义组件
/* export default class App extends Component {
	state = {count:0}

	add = ()=>{
		this.setState((state)=>({count:state.count+1}))
	}

	componentDidMount(){
		this.timer = setInterval(() => {
			this.setState((state)=>({count:state.count+1}))
		},1000);
	}

	componentWillUnmount(){
		clearInterval(this.timer)
	}
	
	death = ()=>{
		ReactDOM.unmountComponentAtNode(document.getElementById('root'))
	}

	render() {
		return (
			<div>
				<h1>当前的count值为:{this.state.count}</h1>
				<button onClick={this.add}>点我+1</button>
				<button onClick={this.death}>卸载组件</button>
			</div>
		)
	}
} */

//使用函数式定义组件

export default function App (props){
	console.log(props);
	const [count,setCount] = useState(0)
	const [name,setName] = useState('tom')
	const myRef = useRef()

	useEffect(()=>{
		let timer = setInterval(()=>{
			setCount((count)=>count+1)
		},1000)
		return ()=>{
			clearInterval(timer)
		}
	},[])
	
	function add(){
		setCount((count)=>count+1)
	}

	function death(){
		ReactDOM.unmountComponentAtNode(document.getElementById('root'))
	}

	function show (){
		alert(myRef.current.value)
	}
	
	return (
		<div>
			<h1>当前的count值为:{count}</h1>
			<input ref={myRef} type="text" placeholder="请你输入一些文字"/>
			<button onClick={show}>点我提示用户输入</button>
			<button onClick={add}>点我+1</button>
			<button onClick={death}>卸载组件</button>
		</div>
	)
}
