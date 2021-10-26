import Navbar from "../components/Navbar";
import styles from "../styles/discography.module.scss";


export default function about() {
    return (
        <div>
            <Navbar />
            <div className={styles.embed}>
                <h1><span>LATEST</span> RELEASES</h1>
                <iframe className={styles.soundcloud} height="600" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1263562585&color=%233c55d3&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
            </div>
        </div>
    )
}