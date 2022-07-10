import React from 'react'
import styles from './input.module.css';

export default function Input({ containerClass, labelClass, inputClass, txtLabel, placeholder, type}) {
  return (
    <div className={`${containerClass} ${styles['input-container']}`}>
      <label className={`${labelClass} ${styles['input-label']}`} >{txtLabel}</label>
      <input type={type} className={`${inputClass} ${styles['input']}`} placeholder={placeholder} />
    </div>
  )
}
