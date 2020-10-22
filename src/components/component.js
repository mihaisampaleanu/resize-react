import React from 'react'

import styles from './component.module.css'

const AppComponent = () => {
  return (
    <div className={styles.container}>
      <section className={styles.container1}></section>
      <p className={styles.text}>Text</p>
      <video
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
        poster="https://peach.blender.org/wp-content/uploads/bbb-splash.png?x81236"
        className={styles.video}
      ></video>
    </div>
  )
}

export default AppComponent
