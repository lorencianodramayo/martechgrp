import React, { FC } from 'react';
import { Layout, PageHeader, Button, Card, Row, Col, Typography, Input  } from 'antd';

import docuSign from './assets/docu_sign.png';
import armis from './assets/armis.png';
import intrado from './assets/intrado.png';
import siemens from './assets/siemens.png';
import blueGrace from './assets/blue_grace.png';

import './App.less';

const { Title } = Typography;
const { Header, Content, Footer } = Layout;
const { Search } = Input;

const App:FC = () => {
  return (
    <Layout className="App">
      <Header className="App-header"> 
        <PageHeader
          ghost={true}
          title="Martechgrp"
          extra={[
            <Button key="2" type="link">Contact us</Button>,
            <Button key="1" type="primary">
              Asset
            </Button>,
          ]}
        />
      </Header>
      <Content className="App-content">
        {/* Banner  */}
        <Row className="content-banner">
          <Col span={24}>
          <Card bordered={false}>
            <Title level={2}>Tech content for today's fast paced world</Title>
            <p>Martechgrp is a leading Global platform for sourcing the latest technology products and services available.</p>
            <Button type="primary">
              Asset
            </Button>
          </Card>
          </Col>
        </Row>
        {/* Brand  */}
        <Row className="content-brand" gutter={[48, 0]}>
          <Col span={4}>
            <img src={docuSign} alt="Docu Sign" />
          </Col>
          <Col span={4}>
           <img src={armis} alt="Armis" />
          </Col>
          <Col span={4}>
            <img src={intrado} alt="Intrado" />
          </Col>
          <Col span={4}>
            <img src={siemens} alt="Siemens" />
          </Col>
          <Col span={4}>
            <img src={blueGrace} alt="Blue Grace" />
          </Col>
        </Row>
        {/*  About */}
        <Row className="content-about">
          <Col>
            <Card bordered={false}>
              <Title level={4}>What we do</Title>
              <Title level={3}>We guide tech buyers through their buying journey</Title>
              <p>Martechgrp provides you with the latest trustworthy, educational &amp; informative content. We help you take the hassle out of sourcing in a one-stop easy-to-use platform allowing you to evaluate, examine and review the latest products and services a business needs within this fast-paced technology world.</p>
              <p>Easy to navigate and access to a library of whitepapers, infographics, and webinars that are key components in the activities of influential IT decision makers around the world.</p>
              <p>Technology research has never been so easy, so why not become a part of our successful online community.</p>
            </Card>
          </Col>
        </Row>
        {/* Industry  */}
        <Row className="content-industry" gutter={[48, 48]}>
          <Col span={8}><Button>SALES</Button></Col>
          <Col span={8}><Button>MARKETINJG</Button></Col>
          <Col span={8}><Button>FINANCE</Button></Col>
          <Col span={8}><Button>ACCOUNTING</Button></Col>
          <Col span={8}><Button>HR</Button></Col>
          <Col span={8}><Button>IT</Button></Col>
        </Row>
        {/* Subscribe  */}
        <Row className="content-subscribe">
          <Col>
            <Card bordered={false}>
              <Title level={2}>Subscribe to get our latest content</Title>
              <Search
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="large"
              />
            </Card>
          </Col>
        </Row>
      </Content>
      <Footer>
        <Row>
          <Col>1</Col>
          <Col>2</Col>
          <Col>3</Col>
          <Col>4</Col>
        </Row>
      </Footer>
    </Layout>
  );
}

export default App;
