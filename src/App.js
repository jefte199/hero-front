//Layout
import { Layout, Menu, Breadcrumb, Button } from 'antd';

import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useState } from 'react';

//List
import { List, Avatar, Space } from 'antd';

import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

//Card
import { Card } from 'antd';

import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

//CSS
import 'antd/dist/antd.css';

const { Meta } = Card;

const listData = [];
for (let i = 0; i < 4; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Marvel_HQ_logo.svg/1200px-Marvel_HQ_logo.svg.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const IconText = ({ icon, text }) => (
  <Space>
    <Button type="primary" block>COMPRAR</Button>
  </Space>
);

const ListHQ = (
  <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <Button type="primary" block>
      Buy
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

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {ListHQ}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Front HQ ©2021</Footer>
      </Layout>
    </Layout>
  );
}

export default App;