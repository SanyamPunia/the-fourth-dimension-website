import React from 'react'
import styles from "../styles/Footer.module.scss"
import { FaDiscord } from "react-icons/fa"
import { FaSoundcloud } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"

export default function Footer() {
    return (
        <div className={styles.iconContainer}>
            <a href="https://soundcloud.com/thisisthefourthdimension">
                <FaSoundcloud className={`${styles.sc} ${styles.icon}`} />
            </a>
            <a href="https://discord.gg/PUCv2XXwH9">
                <FaDiscord className={`${styles.dc} ${styles.icon}`} />
            </a>
            <a href="https://www.youtube.com/channel/UC48VS-ThN5hNFVcQXiLb0Pg">
                <FaYoutube className={`${styles.yt} ${styles.icon}`} />
            </a>
        </div>
    )
}