'use client';

import styles from "./page.module.css";
import Logo from "../Logo/page";
import MenuList from "../MenuList/page";
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Button, Layout } from 'antd';

const { Header, Sider } = Layout;
const SideBar = () => {
    const [darkTheme, setDarkTheme] = useState(true);
    const [collapsed, setCollapsed] = useState(false);


    return (
        <Layout>
            <Sider
                collapsed={collapsed}
                collapsible
                trigger={null}
                className={styles.sidebar}>
                <Logo />
                <MenuList darkTheme={darkTheme} />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: "#0f3246" }} className={styles.header}>
                <div className={styles.divbutton}>
                        <Button type="text"
                            className={styles.toggle}
                            onClick={() => setCollapsed(!collapsed)}
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        />
                        </div>
                    <div className={styles.divtitulo}>
                    <div className={styles.title}>
                        <a href='./'>
                            <img className={styles.titulo} src='/senaiLogo.png' alt='Logo' width={140} height={80} />
                        </a>
                    </div>
                    </div>
                    <div className={styles.divlinks}>
                    <div className={styles.links}>
                        <a href='./LoginServicos'>
                            <p>Login</p>
                        </a>
                        <div className={styles.link}>
                            <a href='./Adm'>
                                <p>Adiministração</p>
                            </a>
                        </div>
                    </div>
                    </div>
                    
                </Header>
            </Layout>
        </Layout>
    );
}


export default SideBar; 