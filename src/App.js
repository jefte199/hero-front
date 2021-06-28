import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

import Header from "./components/Header"
import Home from "./pages/Home";
import ItemsProvider from './hooks/items';

const { Footer } = Layout;

function App() {
  return (
    <ItemsProvider>
      <Layout className="layout">
        <Header />
        <Home />
        <Footer style={{ textAlign: 'center' }}>Created by Jefté ©2021</Footer>
      </Layout>
    </ItemsProvider>
  );
}

export default App;


/*

<Row
          gutter={[12, 8]}
          justify="center"
          align="middle"
        >
          {cards.map(item => {

            //Link images
            let link_images = null;

            if (!(item.images[0])) {
              link_images = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png";
            } else {
              link_images = `${item.images[0].path}.${item.images[0].extension}`
            }

            const menu = (
              <Menu>
                <Menu.Item>
                  <a rel="noopener noreferrer" href="#">
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
                      alt="LOGO"
                      src={link_images}
                    />
                  }
                  actions={[
                    <Button onClick={Buy_HQ(item.title)} type="primary" block>
                      Buy
                      <IconFont type="icon-shoppingcart" />
                    </Button>,
                  ]}
                >
                  <Meta
                    title={item.title}
                  />,
                  <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link">
                      Details <DownOutlined />
                    </a>
                  </Dropdown>,
                </Card>
              </Col>
            )
          })}
        </Row>

*/