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
                        <>
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
                        </>
                    )
                    )}

                </div>
                <div className={styles.rosterEmbed}>
                    <div className={styles.embedToggle}>
                        <FaUserCircle onClick={() => setSpotifyUserInfo(!spotifyUserInfo)} className={styles.spotifyUser} />
                    </div>
                    {rosterList.map(roster => (
                        <>
                            {
                                spotifyUserInfo ?
                                    <iframe src={roster.spotifyEmbed} width="100%" height="380" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>

                                    : <h1>USER INFO</h1>
                            }
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}