import React from 'react'
import styles from './button.module.css'

const Button = ({type = 'primary', children,  disabled = false, ...props }) => {
    const btnClasses = {
        primaryBtn : styles.primaryBtn,
        secondaryBtn : styles.secondaryBtn,
        outlineBtn : styles.outlineBtn,
        disabledBtn : styles.disabledBtn
    }

    const finalClasses = disabled ? styles.disabledBtn : btnClasses[type] || styles.primaryBtn
  return (
    <button className={finalClasses} disabled={disabled} {...props}>{children}</button>
  )
}

export default Button