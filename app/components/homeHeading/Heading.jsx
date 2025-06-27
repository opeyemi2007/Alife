import React from 'react'
import styles from './heading.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../button/Button'

const Heading = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>
          Every Drop Counts,
          <br />
          <span>Be the Life-Line Someone Needs</span>
        </h1>
        <p>
          Thousands of Nigerians need blood daily to survive accidents, surgeries, and health
          conditions. ALIFE connects donors with hospitals — making it simple, rewarding, and
          life-saving.
        </p>
        <Link href="/donate">
          <Button type='secondaryBtn'>Become a donor</Button>
        </Link>
      </div>

      <div className={styles.imageWrapper}>
        <Image
          src="/earth-4861456_1280.jpg"
          alt="Hero"
          fill
          className={styles.image}
          priority
        />
      </div>
    </section>
  )
}

export default Heading
