import React from 'react';
import styles from './page.module.css';
import { DatabaseOutlined } from '@ant-design/icons';

const Logo = () => {
    return (
        <div className={styles.logo}> 
            <div className={styles.logoicon}>
                <DatabaseOutlined />
            </div>
        </div>
    )
};

export default Logo;