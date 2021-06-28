import React, { useState, useEffect } from 'react'
import { Layout, Row, Col, Pagination } from "antd"

import api from "../../service"
import CardHQ from "../../components/Card";

const { Content } = Layout;

export default function Home() {

  const [cards, setCards] = useState([]);
  const [buy, setBuy] = useState(0);
  const [compras, setCompras] = useState([]);

  function Buy_HQ(new_compras) {
    const arr = [...compras];
    arr.push(new_compras);
    setBuy(buy + 1);
    setCompras(arr);
  }

  const clickOnPagination = (page) => {
    console.log(page);
  }

  useEffect(() => {
    api.get("")
      .then(res => {
        setCards(res.data.data.results);
      })
  }, []);

  return (
    <Content style={{ padding: '0 50px' }}>
      <Row
        justify="center"
        align="top"
        gutter={[8, 8]}
      >
        {
          cards.map(item => {
            if (item.images.lenght === 0) {
              return
            } else if (item.images[0] !== undefined) {
              return (
                <Col>
                  <CardHQ
                    title={item.title}
                    urlImg={`${item.images[0].path}.jpg`}
                    description={item.description}
                  />
                </Col>
              )
            }
          })
        }
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
  )
}
