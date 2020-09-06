import React from 'react'
import styles from './styles.module.scss'

function NavItem({ children }) {
  return <a className={styles.navItem}>{children}</a>
}

export default NavItem
