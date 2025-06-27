import styles from './footer.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <h2>
          Saving Lives Starts with You <span>🩸</span>
        </h2>
        <p>
          Join thousands of donors making a difference every day. With ALIFE, your blood can be the
          reason someone sees another sunrise.
        </p>
        <Link href="/donate" className={styles.cta}>
          Become a Donor
        </Link>
      </div>

      <div className={styles.links}>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/find">Find Donors</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4>Support</h4>
          <ul>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/auth/donor/login">Donor Login</Link></li>
            <li><Link href="/auth/hospital/login">Hospital Login</Link></li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} ALIFE — Every drop matters ❤️</p>
      </div>
    </footer>
  )
}

export default Footer
