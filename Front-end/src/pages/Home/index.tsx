import React, { useState } from 'react'; 
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  PlusCircleOutlined, 
  UnorderedListOutlined
} from '@ant-design/icons';

import './style.css'; 
import List from './List/index'; 
import RegisterCostumer from './registerCostumer/index';

const { Header, Sider, Content } = Layout;

const Home = () => {
    const [collapse, setCollapse] = useState(false); 

    const [activePage, setActivePage] = useState(1); 

    const toggle = () => {
        setCollapse(!collapse);
    };

    return(
        <Layout>
        <Sider className="containerHomePage" trigger={null} collapsible collapsed={collapse}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UnorderedListOutlined />}>
                <a onClick={() => setActivePage(1)} >Costumers List</a>
            </Menu.Item>
            <Menu.Item key="2" icon={<PlusCircleOutlined />}>
                <a onClick={() => setActivePage(2)} >Add Costumer</a>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapse ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
          </Header>
          <Content
            className="site-layout-background scrool"
            style={{
              margin: '24px 16px',
              padding: 24,
              height: 100,
              minHeight: 280,
            }}
          >
            {activePage === 1 &&  <List />}
            {activePage === 2 && <RegisterCostumer />}
          </Content>
        </Layout>
      </Layout>
    );
}

export default Home; 
