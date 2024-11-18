import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, UserOutlined, TeamOutlined } from '@ant-design/icons';
import styles from './page.module.css';

const MenuList = ({ darkTheme }) => {
  return (
    <Menu theme={darkTheme ? 'dark' : 'light'} mode="inline" className={styles.menubar}>
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <a href='./'>
          Home
        </a>
      </Menu.Item>
      <Menu.Item key="login" icon={<UserOutlined />}>
        <a href='./LoginServicos'>
          Login
        </a>
      </Menu.Item>
      <Menu.Item key="adm" icon={<UserOutlined />}>
        <a href='./Adm'>
          Administração
        </a>
      </Menu.Item>
      <Menu.Item key="team" icon={<TeamOutlined />}>
        <a href='./Developers'>
          Desenvolvedores
        </a>
      </Menu.Item>
    </Menu>
  );
};

export default MenuList;