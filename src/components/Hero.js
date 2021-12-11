import React from 'react'
import styles from '../styles/Hero.module.css'

const Hero = () => {
    return (
        <header className={styles.div_container}>
                <div className={styles.hola}> <h2>Adquiere tus productos favoritos al mejor precio</h2></div>
                {/* <img src='https://res.cloudinary.com/aca-geek/image/upload/v1639244900/296-2969441_fruta-por-color-color-de-las-frutas_iyruaz.jpg' alt=''  className={styles.image_hero} /> */}
        </header>
    )
}

export default Hero
