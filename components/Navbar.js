import React, { useState } from 'react'
import styles from '../styles/Navbar.module.scss'
import { GiHamburgerMenu } from "react-icons/gi"

export default function Navbar() {
  return (
    <div className={styles.navItems}>
      <div className={styles.logo}>
        <a href="/"><img className={styles.logoImg} src="images/4d-logo.png" alt="4D Logo" /></a>
      </div>

      <div className={styles.item}>
        <a href="/discography">Discography</a>
        <a href="/roster">Roster</a>
        <a href="/contact">Contact</a>
      </div>

      <div className={styles.dropDown}>
        <div className={styles.dropBtn}><GiHamburgerMenu /></div>
        <div className={styles.dropdownContent}>
          <a href="/discography">Discography</a>
          <a href="/roster">Roster</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </div>
  )
}