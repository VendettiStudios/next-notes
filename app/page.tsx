import styles from './page.module.css'

export default function Home() {
    return (
        <div className={styles.main}>
            <div className={styles.containerWrapper}>
                <div className={styles.container}>
                    <h1>Note Taker</h1>
                    <h4>Take Notes With Express</h4>
                    <a className={styles.button} href="/notes">Get Started</a>
                </div>
            </div>
        </div>
    )
}
