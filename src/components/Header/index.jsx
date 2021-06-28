import React, { useState } from 'react'
import { Layout, Menu, } from "antd";
import { UserOutlined, createFromIconfontCN } from "@ant-design/icons";

const { Header } = Layout;
const { Item, SubMenu } = Menu;

const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
    '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
  ],
})

export default function Index() {

  const [compras, setCompras] = useState([]);

  return (
    <>
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
        >
          <SubMenu
            key="sub1"
            icon={<UserOutlined />}
            title={"buying"}
          >
            {!!compras.length && compras.map((item, index) => {
              const key = index + 1;
              return (
                <Item key={key}>
                  <IconFont type="icon-shoppingcart" />{`${key}`}
                  {item}
                </Item>
              );
            })}
          </SubMenu>
        </Menu>
      </Header>
    </>
  )
}
