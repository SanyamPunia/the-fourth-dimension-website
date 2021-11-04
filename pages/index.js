import Footer from "../components/Footer"
import Landing from "../components/Landing"
import Navbar from "../components/Navbar"
import styles from "../styles/Index.module.scss"

export default function Home() {
  return (
    <div className={styles.mainGrid}>
      <Navbar />
      <Footer />
      <Landing />
    </div>
  )
}