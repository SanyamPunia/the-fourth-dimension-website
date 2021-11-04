import React from 'react'
import Navbar from '../components/Navbar'
import styles from "../styles/contact.module.scss"

export default function contact() {
    return (
        <div>
            <Navbar />
            <div className={styles.container}>
                <h1>CONTACT US</h1>
                <form action="https://formspree.io/f/xgerkzaa" method="POST">
                    <div>
                        <input type="text" name="name" autoComplete="off" required />
                        <label className={styles.labelName}><span className={styles.contentName}>Name</span></label>
                    </div>
                    <br />
                    <div>
                        <input type="text" name="_replyto" placeholder=" " autoComplete="off" required />
                        <label className={styles.labelName}><span className={styles.contentName}>Email</span></label>
                    </div>
                    <textarea name="message" placeholder="Message" rows="9" required />
                    <br />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}
