import React,{Component} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import * as actions from '@/store/actions';
import { Carousel,Menu  } from 'antd'
import './index.css'
import Header from '@/components/header/index'

 
class  Home extends Component{
	
	constructor(props){
		super(props)
		this.state = {
			current: 'mail',
		}
		
		this.handleClick = this.handleClick.bind(this);
	}
	componentDidMount() {
		let that = this;
       
    }
	handleClick(e){
		let that = this;
		this.setState({
			current: e.key,
		});
		console.log(e.key)
	}
	render(){
		return(
			<div>
				<Header />
				<div className="navigation_home">
					<Menu
						onClick={this.handleClick}
						selectedKeys={[this.state.current]}
						mode="horizontal"
						>
						<Menu.Item key="film">
							电影
						</Menu.Item>
						<Menu.Item key="tv_play">
							电视剧
						</Menu.Item>
						<Menu.Item key="variety">
							综艺
						</Menu.Item>
						<Menu.Item key="sports">
							体育
						</Menu.Item>
						<Menu.Item key="cartoon">
							动画片
						</Menu.Item>
						<Menu.Item key="short_video">
							搞笑短视频
						</Menu.Item>
					</Menu>
				</div>
				<section id="banner_home">
					<Carousel dots={false}>
						<div><h3>1</h3></div>
						<div><h3>2</h3></div>
						<div><h3>3</h3></div>
						<div><h3>4</h3></div>
					</Carousel>
				</section>
				
			</div>
		)
	}
}




const mapStateToProps = (state, ownProps)=>{
	return {
		num: state.testReducer.num
	}
}




export default connect(mapStateToProps)(Home);


