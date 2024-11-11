import React from 'react'
import styles from './page.module.css';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';
import { Button } from 'antd';

const ToggleThemeButton = ({ darkTheme, toggleTheme }) => {
  return (
    <div className={styles.togglethemebtn}>
      <Button onClick={toggleTheme}>
        {darkTheme ? <HiOutlineMoon /> : <HiOutlineSun />}
      </Button>
    </div>
  )
} 

export default ToggleThemeButton;