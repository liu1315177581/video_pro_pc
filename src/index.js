import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {  LocaleProvider } from 'antd'

import 'antd/dist/antd.css';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';


import '@/index.css';
import Routers from '@/router';
import todoApp from '@/store/reducers';


let store = createStore(todoApp)

ReactDOM.render( 
	<Provider locale={zhCN} store={store}>
		<LocaleProvider locale={zhCN}>
			<Routers/>
		</LocaleProvider>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
