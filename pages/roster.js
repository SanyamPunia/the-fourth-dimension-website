import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import styles from "../styles/roster.module.scss"
import { rosterList } from '../rosterList'
import { FaUserCircle } from "react-icons/fa"
import { FaSoundcloud } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { FaSpotify } from 'react-icons/fa'

export default function rosters() {
    const [spotifyUserInfo, setSpotifyUserInfo] = useState(true)

    console.log(rosterList[0].name);
    return (
        <div>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.roster}>
                    {rosterList.map(roster => (
                        <div className={styles.rosterElement}>
                            <div className={styles.rosterInfo}>
                                <h1>{roster.name}</h1>
                                <p>{roster.headPara}</p>
                                <br />
                                <p>{roster.bodyPara}</p>
                                <br />
                                <p>{roster.endPara}</p>
                                <div className={styles.rosterSocial}>
                                    <a className={styles.yt} href={roster.youtube}><FaYoutube /></a>
                                    <a className={styles.sc} href={roster.soundcloud}><FaSoundcloud /></a>
                                    <a className={styles.sf} href={roster.spotify}><FaSpotify /></a>
                                </div>
                            </div>
                            <iframe src={roster.spotifyEmbed} width="50%" height="380" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                        </div>
                    )
                    )}
                </div>
            </div>
        </div>
    )
}