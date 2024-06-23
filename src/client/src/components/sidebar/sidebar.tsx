import React, { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button,Grid, Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<Link to="/dashboard">Dashboard</Link>, '1', <UserOutlined />),
  getItem('Appointment', '2', <TeamOutlined />,
    [
      getItem(<Link to="/appointment">Appointment Details</Link>, '2.1'),
      getItem(<Link to="/new-appointment">Create Appointment</Link>, '2.2'),
    ]
  ),
  getItem(<Link to="/patients">Patients</Link>, '3', <PieChartOutlined />),
  getItem(<Link to="/doctors">Doctors</Link>, '4', <FileOutlined />),
  getItem(<Link to="/pharmacy">Pharmacy</Link>, '5', <DesktopOutlined />),
  getItem(<Link to="/billings">Billings</Link>, '6', <DesktopOutlined />),
  getItem(<Link to="/settings">Settings</Link>, '7', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '8'),
    getItem('Bill', '9'),
    getItem('Alex', '10'),
  ]),
];

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { useBreakpoint } = Grid;
  const { lg } = useBreakpoint();
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible={lg}
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" style={{ padding: 50 }} />

        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
        <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>  
        <Content style={{ margin: '0 16px' }}>
          <div
            style={{
              padding: 24,
              minHeight: 500,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          PIMS Hospital ©{new Date().getFullYear()} Created by Wishvanath
        </Footer>
      </Layout>
    </Layout>
  );
};

export default SideBar;
