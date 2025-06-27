'use client'
import styles from './header.module.css'
import Button from '../button/Button'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx';
import { useEffect, useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'

const Header = () => {
    const [blure, setBlure] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = 90
            setBlure(window.scrollY > scrollY)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const location = usePathname()
    const routes = [
        { label: 'Home', url: '/' },
        { label: 'About us', url: '/about' },
        { label: 'Blog', url: '/blog' },
        { label: 'Contact', url: '/contact' },
        { label: 'Find', url: '/find' },
    ]

    return (
        <>
            <div className={`${styles.headerWrapper} ${blure ? styles.blurred : ''}`}>
                <div className={styles.innerHeaderWrapper}>
                    <Image
                        src='/alifenobg-Logo.png'
                        width={90}
                        height={80}
                        alt='Alife-Logo'
                    />

                    <nav className={styles.desktopNav}>
                        <ul className={styles.ul}>
                            {routes.map((route, index) => (
                                <Link href={route.url} key={index}>
                                    <li className={clsx({
                                        'relative text-black after:content-["❤"] after:absolute after:-right-[-2] after:top[-3] after:-translate-y-1/2 after:text-black after:text-xs': location === route.url
                                    })}>{route.label}</li>
                                </Link>
                            ))}
                        <Link href='/auth/signupentry' legacyBehavior>
                            <a>
                            <Button>Register</Button>
                            </a>
                        </Link>

                        <Link href="/auth/authentry" legacyBehavior>
                            <a>
                                <Button type="outlineBtn">Login</Button>
                            </a>
                        </Link>
                        </ul>
                    </nav>

                    <div className={styles.mobileMenuIcon} onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <IoClose size={28} /> : <HiMenuAlt3 size={28} />}
                    </div>
                </div>

                {menuOpen && (
                    <div className={styles.mobileMenu}>
                        {routes.map((route, index) => (
                            <Link href={route.url} key={index} onClick={() => setMenuOpen(false)}>
                                <li className={location === route.url ? 'text-black font-semibold' : ''}>{route.label}</li>
                            </Link>
                        ))}

                        <Link href='/auth/signupentry' legacyBehavior>
                            <a>
                            <Button>Register</Button>
                            </a>
                        </Link>

                        <Link href="/auth/authentry" legacyBehavior>
                            <a>
                                <Button type="outlineBtn">Login</Button>
                            </a>
                        </Link>

                    </div>
                )}
            </div>

            <div className={styles.headerPusher}></div>
        </>
    )
}

export default Header
