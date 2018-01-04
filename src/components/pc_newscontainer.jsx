import React, {Component} from 'react';
import {Row, Col, Tabs, Carousel} from 'antd';
import carousel_1 from '../images/carousel_1.jpg';
import carousel_2 from '../images/carousel_2.jpg';
import carousel_3 from '../images/carousel_3.jpg';
import carousel_4 from '../images/carousel_4.jpg';
import PCNewsImageBlock from './pc_news_image_block'
import PCNewsBlock from './pc_news_block'
const TabPane = Tabs.TabPane;

export default class PCNewsContainer extends Component {
  render() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true
    };
    return (
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={20} className="container">
            <div className="leftContainer">
              <div className="carousel">
                <Carousel {...settings}>
                  <div><img src={carousel_1}/></div>
                  <div><img src={carousel_2}/></div>
                  <div><img src={carousel_3}/></div>
                  <div><img src={carousel_4}/></div>
                </Carousel>
              </div>
              <PCNewsImageBlock count={6} type="guoji" width="400px" cartTitle="国际头条" imageWidth="112px" />
              <PCNewsImageBlock count={6} type="yule" width="400px" cartTitle="娱乐头条" imageWidth="112px" />
            </div>
            <Tabs className="tabs_news" >
              <TabPane tab="新闻" key="1" >
                <PCNewsBlock count={32} type="top" width="100%" bordered="false"/>
              </TabPane>
              <TabPane tab="国际" key="2" >
                <PCNewsBlock count={32} type="guoji" width="100%" bordered="false"/>
              </TabPane>
            </Tabs>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    )
  };
};
