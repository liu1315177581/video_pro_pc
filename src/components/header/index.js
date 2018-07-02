import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { Input } from 'antd';
import './index.css'


const Search = Input.Search;


class Header extends Component{
	
	constructor(props){
		super(props)
	
		let that = this;
		that.state = {
			logo_url:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1900023495,3593820387&fm=27&gp=0.jpg'
		}
		that.searchMessageFun = that.searchMessageFun.bind(that)
	}

	searchMessageFun(data){
		console.log(data)
	}

	render(){
		return(
			<div id="header_home" className="clearfix">
				<div id="logo" className="fl">
					<img src={this.state.logo_url}/>
				</div>
				<div id='userMessage_home' className="fr">
					<div className="button fl">
						LOGIN
					</div>
					<div className="user fl">
						
					</div>
				</div>
				<div id="search_home">
					<Search
						placeholder="search"
						enterButton="GO"
						size="large"
						onSearch={value => this.searchMessageFun(value)}
					/>
				</div>
				
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps)=>{
	return {
		
	}
}

export default connect(mapStateToProps)(Header)