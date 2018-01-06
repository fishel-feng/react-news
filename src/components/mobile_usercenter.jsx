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
  render() {
    return (
      <div>
        <MobileHeader></MobileHeader>
        <Row>
          <Col span={24}>
            <Tabs>
              <TabPane tab="我的收藏列表" key="1">

              </TabPane>
              <TabPane tab="我的评论列表" key="2">

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
