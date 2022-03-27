import { Layout, Menu, Breadcrumb, PageHeader, Button } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import './App.less';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

function App() {
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
      <Content style={{ padding: '0 50px' }}>
        Text
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
}

export default App;
