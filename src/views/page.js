import React from 'react'

import Helmet from 'react-helmet'

import AppComponent from '../components/component'
import projectStyles from '../style.module.css'
import styles from './page.module.css'

const Page = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>resize</title>
        <meta property="og:title" content="resize" />
      </Helmet>
      <div className={styles.container1}>
        <AppComponent></AppComponent>
        <span className={styles.text}>Text</span>
      </div>
      <div className={styles.container2}></div>
      <span className={styles.text1}>Text</span>
      <img
        src="https://images.unsplash.com/photo-1589404879476-a276396cb9dc?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1000"
        className={` ${projectStyles.thqImage} ${styles.image} `}
      />
      <div className={styles.container3}></div>
      <div className={styles.container4}>
        <div className={styles.container5}></div>
      </div>
    </div>
  )
}

export default Page
