import React, {Component} from 'react';
import {Link} from 'react-router';
import logo from '../images/logo.png';
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
  Card
} from 'antd';
const { TextArea } = Input;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const MenuItemGroup = Menu.ItemGroup;

class CommonComments extends Component {

  constructor(props) {
    super(props);
    this.state = {
      comments: ''
    };
  }

  componentDidMount() {
    const myFetchOptions = {
      method: 'GET'
    };
    fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=${this.props.uniquekey}`, myFetchOptions).then(response => response.json()).then(json => {
      this.setState({comments: json});
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const myFetchOptions = {
      method: 'GET'
    };
    const formdata = this.props.form.getFieldsValue();
    fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=${localStorage.userid}&uniquekey=${this.props.uniquekey}&commnet=${formdata.remark}`, myFetchOptions).then(response => response.json()).then(json => {
			this.componentDidMount();
		});
  }

  render() {
    let {getFieldProps} = this.props.form;
    const {comments} = this.state;
    const commentList = comments.length
      ? comments.map((comment, index) => (
        <Card key={index} title={comment.UserName} extra={<a href = "#">发布于 {comment.datetime}</a>}>
					<p>{comment.Comments}</p>
				</Card>
      ))
      : '没有加载到评论' ;
    return (
      <div className="comment">
        <Row>
          <Col span={24}>
            {commentList}
            <Form onSubmit={this.handleSubmit.bind(this)}>
              <FormItem label="您的评论">
                <TextArea placeholder="随便说点什么" {...getFieldProps('remark',{initialValue: ''})}/>
              </FormItem>
              <Button type="primary" htmlType="submit">提交评论</Button>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
};

export default CommonComments = Form.create({})(CommonComments);
