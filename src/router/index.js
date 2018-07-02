import React,{Component} from 'react'
import { 
	BrowserRouter as Router,
  	Route,
  	Link 
} from 'react-router-dom'

import rem from '@/static/js/rem'


import Home from '../views/home'
import About from '../views/about'
import Topics from '../views/topics'



class Routers extends Component{
	constructor(props){
		super(props)
		this.state = {
			
		}
	}
	
	componentDidMount(){
		rem(window)
	}

	render(){
		return(
			<Router>
				<div>
					<Route exact path="/" component={Home}/>
					<Route path="/about" component={About}/>
					<Route path="/topics" component={Topics}/>
				</div>
			</Router>
		)
	}
}

export default Routers