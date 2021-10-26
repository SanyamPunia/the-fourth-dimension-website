import React from 'react'
import styles from "../styles/Landing.module.scss"

export default function Landing() {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <h1>THE</h1>
                <h1>FOURTH</h1>
                <h1>DIMENSION</h1>
                <p>
                    On the 24th of February 2021,the collective has been founded, a group of producers specialized in the Wave genre.
                    We strive to become better at producing and grow a bigger audience, we do this by helping each other through feedback on
                    our tracks, by promoting one another, or any other way to support the fellow members. We hope you will enjoy the music we
                    will bring out in the near future.
                </p>
            </div>
            <div className={styles.headingBtn}>
                <a href="/">more</a>
            </div>
        </div>
    )
}