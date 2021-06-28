import React, { useState, useEffect } from 'react'
import { Layout, Row, Col, Pagination } from "antd"
import axios from "axios";
import md5 from "js-md5"

import api, { publick_key, private_key } from "../../service"
import CardHQ from "../../components/Card";

const { Content } = Layout;
const timestamp = Number(new Date());
const hash_hero = md5.create();
hash_hero.update(timestamp + private_key + publick_key);
const hash = hash_hero.hex();

export default function Home() {


  const [cards, setCards] = useState([]);
  const [buy, setBuy] = useState(0);
  const [compras, setCompras] = useState([]);
  const [totalItems, setTotalItems] = useState([]);

  function Buy_HQ(new_compras) {
    const arr = [...compras];
    arr.push(new_compras);
    setBuy(buy + 1);
    setCompras(arr);
  }

  const getUrlPagination = (limit, offset) => {
    const url = `https://gateway.marvel.com/v1/public/comics?offset=${offset}&limit=${limit}&ts=${timestamp}&apikey=${publick_key}&hash=${hash}`
    console.log(url);

    return url;
  }

  const clickOnPagination = (page) => {
    api.get(getUrlPagination(`${page}0`, `${page - 1}0`))
      .then(res => {
        const arr = [...res.data.data.results.slice(cards.length)];
        setCards(arr)
      })

  }

  useEffect(() => {
    api.get("")
      .then(res => setTotalItems(res.data.data.total))
  }, []);

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
            total={totalItems}
            onChange={clickOnPagination}
          />
        </Col>
      </Row>
    </Content>
  )
}
