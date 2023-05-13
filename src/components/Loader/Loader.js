import React from 'react'
import styles from '@/components/Loader/Loader.module.css'

export const Loader = () => {
  return (
    <>
        <div className={styles.mask}></div>
        <img className={styles.loader} src='loader.gif' />
    </>
  )
}
