import React from 'react';
import styles from './page.module.css';
import { FireFilled } from '@ant-design/icons';

const Logo = () => {
    return (
        <div className={styles.logo}> 
            <div className={styles.logoicon}>
                <FireFilled />
            </div>
        </div>
    )
};

export default Logo;