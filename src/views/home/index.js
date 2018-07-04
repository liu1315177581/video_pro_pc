import React,{Component} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import * as Actions from '@/store/actions';
import { Carousel,Menu,Rate  } from 'antd'
import './index.css'
import Header from '@/components/header/index'

 
class  Home extends Component{
	
	constructor(props){
		super(props)
		this.state = {
			current: 'mail',
			index: 0
		}
	}
	componentDidMount() {

    }

	handleClick(item){
		let data = Object.assign({}, this.state, { current: item.key })
		this.setState(data)
		// Actions.default.banner_message_fun(this.props.dispatch)
		
	}
	switchSlideFun(index,e){
		e.preventDefault();
		this.refs.swipeBigPic.goTo(index);
	}
	beforeChangeFun(from,index){
		let data = Object.assign({}, this.state, { index:index })
		this.setState(data)
	}
	render(){
		return(
			<div>
				<Header />
				<div className="navigation_home">
					<Menu
						onClick={this.handleClick.bind(this)}
						mode="horizontal"
						defaultSelectedKeys={[this.props.navigation_message[0].key]}
						>
						{
							this.props.navigation_message.map((item,index)=>{
								return (
									<Menu.Item key={item.key}>
										{item.btn_text}
									</Menu.Item>
								)
							})
						}
					</Menu>
				</div>
				<section id="banner_home" className="clearfix">
					<Carousel 
						ref="swipeBigPic" 
						dots={false}
						beforeChange={this.beforeChangeFun.bind(this)}
					>
						{
							this.props.banner_message.map((item,index)=>{
								return (
									<div key={index} className="banner_item_img">
										<a href={item.url_link}>
											<img className="images" src={item.img} alt=""/>
										</a>
										<div className="popUp_banner_home">
											<h3>
												{item.title}
											</h3>
											<p>
												{item.text}
											</p> 
										</div>
									</div>
								)
							})
						}
					</Carousel>
					<ul className="banner_navigateCon_home fl">
						{
							this.props.banner_message.map((item,index)=>{
								return (
									<li onClick={this.switchSlideFun.bind(this,index)} className={['banner_navigateLi_home', this.state.index == index ? 'banner_navigateLi_home_active' : '' ].join(' ')} key={index}>
										<a href={item.url_link} className="clearfix">
											<img className="imgContent fl" src={item.img} alt=""/>
											<dl className='textContent fl'>
												<dt className={[this.state.index == index ? 'dt_active' : '']}>
													{item.title}
												</dt>
												<dd className={[this.state.index == index ? 'dd_active' : '']}>
													{item.text}
												</dd>
											</dl>
										</a>
									</li>
								)
							})
						}
					</ul>
				</section>
				<section className="list_video_home">
					<ul className="clearfix">
						{
							this.props.banner_message.map((item,index)=>{
								return (
									<li className="li_video_home fl" key={index}>
										<a href="">
											<img className="images" src={item.img} alt=""/>
											<dl>
												<dt>
													{item.title}
												</dt>
												<dd className="clearfix">
													<span>
														{item.show_year.substr(0,4)}
													</span>
													<Rate className="fr" disabled defaultValue={2} />
												</dd>
											</dl>
										</a>
									</li>
								)
							})
						}
					</ul>
				</section>
			</div>
		)
	}
}



const mapStateToProps = (state, ownProps)=>{
	return {
		banner_message: state.banner_message,							/* banner区域信息 */
		navigation_message: state.navigation_message,					/* 导航切换栏 */
	}
}




export default connect(mapStateToProps)(Home);


