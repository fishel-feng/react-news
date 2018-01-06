import { Router, Route, hashHistory } from 'react-router'
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MediaQuery from 'react-responsive';
import PCIndex from './components/pc_index';
import PCNewsDetails from './components/pc_news_details';
import MobileIndex from './components/mobile_index';
import MobileNewsDetails from './components/mobile_news_details';
import PCUserCenter from './components/pc_usercenter';
import MobileUserCenter from './components/mobile_usercenter';
import './style/pc.css';
import './style/mobile.css';
import 'antd/dist/antd.css';

export default class Index extends Component {
  render() {
    return (
      <div>
        <MediaQuery query="(min-device-width: 1224px)">
          <Router history={hashHistory}>
            <Route path='/' component={PCIndex}/>           
            <Route path='/details/:uniquekey' component={PCNewsDetails}/>           
            <Route path='/usercenter' component={PCUserCenter}/>           
          </Router>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1224px)">          
          <Router history={hashHistory}>
            <Route path='/' component={MobileIndex}/>           
            <Route path='/details/:uniquekey' component={MobileNewsDetails}/>           
            <Route path='/usercenter' component={MobileUserCenter}/>           
          </Router>
        </MediaQuery>
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));