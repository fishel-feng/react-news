import React, { Component } from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import {
  Row,
  Col,
  Menu,
  Icon,
  Tabs,
  message,
  Form,
  Input,
  Button,
  Checkbox,
  Modal,
  Card,
  notification
} from 'antd';
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const MenuItemGroup = Menu.ItemGroup;

export default class MobileUserCenter extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      usercollection: '',
      usercomments: '',
      previewImage: '',
      previewVisible: false
    }; 
  }

  componentDidMount() {
		const myFetchOptions = {
			method: 'GET'
		};
		fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=${localStorage.userid}`, myFetchOptions).then(response=>response.json()).then(json=>{
			this.setState({usercollection: json});
    });
    fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=${localStorage.userid}`, myFetchOptions).then(response=>response.json()).then(json=>{
			this.setState({usercomments: json});
		});
	};
  
  render() {
    const {usercollection, usercomments} = this.state;
    const usercollectionList = usercollection.length
      ? usercollection.map((uc, index) => (
        <Card key={index} title={uc.uniquekey} extra={<a target="_blank" href={`/#/details/${uc.uniquekey}`}>查看</a>}>
          <p>
            {uc.Title}
          </p>
        </Card>
      ))
      : '没有收藏任何新闻' ;
    const usercommentsList = usercomments.length
      ? usercomments.map((comment, index) => (
        <Card key={index} title={`${comment.datetime} ${comment.uniquekey}`} extra={<a href={`/#/details/${comment.uniquekey}`}>查看</a>}>
          <p>
            {comment.Comments}
          </p>
        </Card>
      ))
      : '没有发表过评论' ;
    return (
      <div>
        <MobileHeader></MobileHeader>
        <Row>
          <Col span={24}>
            <Tabs>
              <TabPane tab="我的收藏列表" key="1">
                <Row>
                  <Col span={24}>
                    {usercollectionList}
                  </Col>
                </Row>                
              </TabPane>
              <TabPane tab="我的评论列表" key="2">
                <Row>
                  <Col span={24}>
                    {usercommentsList}
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab="头像设置" key="3">

              </TabPane>
            </Tabs>
          </Col>
        </Row>
        <MobileFooter></MobileFooter>
      </div>
    )
  }
};
