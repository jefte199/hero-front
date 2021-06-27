import React, { useState, useEffect } from 'react';

//Layout
import { Layout, Menu, Button, Row, Col } from 'antd';

import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

//Card
import { Avatar, Card } from 'antd';

import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

//Icons
import { SmileTwoTone, HeartTwoTone, CheckCircleTwoTone } from '@ant-design/icons';

import { createFromIconfontCN } from '@ant-design/icons';

// Pagination 
import { Pagination } from 'antd';

// Dropdown
import { Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

//CSS
import 'antd/dist/antd.css';

import api from './api';

const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
    '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
  ],
});

const { Meta } = Card;

const CardHQ = (
  <Card
    hoverable
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <Button type="primary" block>
        <div className="icons-list">
          Buy
          <IconFont type="icon-shoppingcart" />
        </div>
      </Button>,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title="Card title"
      description="This is the description"
    />
  </Card>
);

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function App() {

  const [collapsed, setCollapsed] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.get("")
      .then(res => {
        console.log(res.data.data.results);
        setCards(res.data.data.results);
      })
  }, []);

  const clickOnPagination = (number) => {
    console.log(number);
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Row
            gutter={[12, 8]}
            justify="center"
            align="middle"
          >
            {cards.map(item => {
              const menu = (
                <Menu>
                  <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                      {item.description}
                    </a>
                  </Menu.Item>
                </Menu>
              );
              
              return (
                <Col
                  span={6}
                >
                  <Card
                    hoverable
                    style={{ maxWidth: "200px" }}
                    cover={
                      <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      />
                    }
                    actions={[
                      <Button type="primary" block>
                        <div className="icons-list">
                          Buy
                          <IconFont type="icon-shoppingcart" />
                        </div>
                      </Button>,
                    ]}
                  >
                    <Meta
                      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                      title={item.name}
                    />,
                    <Dropdown overlay={menu}>
                      <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        Hover me <DownOutlined />
                      </a>
                    </Dropdown>,
                  </Card>
                </Col>
              )
            })}
          </Row>
          <Row
            gutter={[8, 8]}
            justify="center"
            align="middle"
            style={{
              marginTop: "10px"
            }}
          >
            <Col>
              <Pagination
                defaultCurrent={1}
                total={20}
                onChange={clickOnPagination}
              />
            </Col>
          </Row>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Front Hero ©2021</Footer>
      </Layout>
    </Layout>
  );
}

export default App;