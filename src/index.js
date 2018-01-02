import { Router, Route, hashHistory } from 'react-router'
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

export default class Index extends Component {
  render() {
    return (
      <div>init</div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));