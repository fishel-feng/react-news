import React, { Component } from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import CommonComments from './common_comments';
import {Row, Col, BackTop} from 'antd';

export default class MobileNewsDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newsItem: ''
    };
  }
  
  componentDidMount() {
    const myFetchOptions = {
      method: 'GET'
    };
    fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=${this.props.params.uniquekey}`, myFetchOptions).then(response => response.json()).then(json => {
      this.setState({newsItem: json});
      document.title = this.state.newsItem.title + ' - React News | React 强力驱动';
    });
  }

  createMarkUp() {
    return {__html: this.state.newsItem.pagecontent};
  }

  render() {
    return (
      <div id="mobileNewsDetailsContainer" >
        <MobileHeader></MobileHeader>
        <div className="ucmobileList">
          <Row>
            <Col span={24} className="container" >
              <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkUp()} ></div>
              <hr/>
              <CommonComments uniquekey={this.props.params.uniquekey}/>
            </Col>
          </Row>
          <MobileFooter></MobileFooter>
          <BackTop/>
        </div>
      </div>
    )
  }
};
