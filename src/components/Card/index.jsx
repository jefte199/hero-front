import React from 'react'
import { Card, Button, Avatar, } from "antd";
import { createFromIconfontCN } from "@ant-design/icons"
import { useItems } from "../../hooks/items"

const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
    '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
  ],
});

const { Meta } = Card;

export default function Cartao(props) {

  const { items, setItems } = useItems();

  return (
    <>
      <Card
        hoverable
        style={{ width: 300 }}
        cover={
          <img
            alt={props.title}
            src={props.urlImg}
            width="200px"
            height="300px"
          />
        }
        actions={[
          <Button type="primary" block onClick={() => setItems([...items, props.title])}>
            <div className="icons-list">
              Buy
              <IconFont type="icon-shoppingcart" />
            </div>
          </Button>,
        ]}
      >
        <Meta
          avatar={<Avatar src={props.urlImg} />}
          title={props.title}
          description={props.description}
        />
      </Card>
    </>
  )
}
