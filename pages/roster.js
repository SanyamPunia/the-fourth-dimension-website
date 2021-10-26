import React from 'react'
import Navbar from '../components/Navbar'
import styles from "../styles/roster.module.scss"
import { FaSoundcloud } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { FaSpotify } from 'react-icons/fa'

export default function rosters() {
    return (
        <div>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.roster}>
                    <h1>DIENANDT</h1>
                    <p>Dienandt is a 17 year old producer from the Netherlands. His musical journey started at a very young age of 6 years old, getting piano lessons by his grandmother.</p>
                    <br />
                    <p>At the start of his electronic music career, he was just learning how to use the still unfamiliar program, unconsciously developing a great passion for making music.</p>
                    <br />
                    <p>Dienandt quickly got introduced to hard-hitting genres such as Bass Trap and Hard Trap, which he fell in love with. After more than a year of producing Bass Trap, Dienandt found his best-suited genre, Wave music. This much calmer type of music was a new experience for him, but after more than a year of hard work, he managed to create his own, unique sound in this genre.</p>
                    <div className={styles.rosterSocial}>
                        <a className={styles.yt} href="https://www.youtube.com/channel/UCW4AofArqJDLJW3X28d92kQ"><FaYoutube /></a>
                        <a className={styles.sc} href="https://soundcloud.com/dienandt"><FaSoundcloud /></a>
                        <a className={styles.sf} href="https://open.spotify.com/artist/0wL0vK7kJwdEFecQpTDceL"><FaSpotify /></a>
                    </div>

                </div>
                <div className={styles.rosterEmbed}>
                    <div className={styles.embedToggle}>
                        <FaSpotify className={styles.spotifyIcon} />
                        <FaSoundcloud className={styles.soundcloudIcon} />
                    </div>
                    <iframe src="https://open.spotify.com/embed/artist/0wL0vK7kJwdEFecQpTDceL?utm_source=generator&amp;theme=0" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                </div>
            </div>
        </div>
    )
}
