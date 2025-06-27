import React from 'react'
import styles from './benefit.module.css'
import { BsHeartFill } from 'react-icons/bs'
import Link from 'next/link'
import Button from '../button/Button'
import image1 from '/public/row-1-column-1 (2).jpg'
import image2 from '/public/row-1-column-2.jpg'
import image3 from '/public/row-1-column-3.jpg'
import Image from 'next/image'

const Benefits = () => {

    const benefits = [
        "Free basic health checkups (e.g blood pressure, general wellnes)",
        "Reduces the risk of heartdiseses and some cancers",
        "Enhanced mental well-being",
        "Provision of valuable informationabout your health."
    ]
    return (
        <div className={styles.benefitWrapper}>
            <div className={styles.innerWrapper}>
                <h1>KEY BENEFITS FOR DONORS</h1>
                <div className={styles.textWrapper}>
                    <h2>Saves lives while gaining valuable benefits.</h2>
                    <span>When you donate blood, you’re not just
                        saving lives you’re also gaining valuable
                        benefits. Make an impact while taking care
                        of your own well-being.</span>
                    <Link href="/donate">
                        <Button type='secondaryBtn'>Become a donor</Button>
                    </Link>
                </div>

                <div className={styles.benefitsHolder}>
                    <h2>Exclusive Donor Incentives</h2>
                    {
                        benefits.map((b, index)=>(
                            <p key={index}><BsHeartFill color='#e63946' size={10}/>{b}</p>
                        ))
                    }
                </div>

                <div className={styles.imageHolder}>
                <Image
                src={image1}
                alt='split image 1'
                className = {styles.splittedImage}
                />
                <Image
                src={image2}
                alt='split image 2'
                className = {styles.splittedImage}
                />
                <Image
                src={image3}
                alt='split image 3'
                className = {styles.splittedImage}
                />
                </div>
                
            </div>
        </div>
    )
}

export default Benefits