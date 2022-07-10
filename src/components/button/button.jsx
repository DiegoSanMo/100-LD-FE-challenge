import React from "react";
import styles from './button.module.css'
export default function Button({classes, text}) {
  return (
    <button 
      className={`${styles['btn']} ${classes}`}>
      {text}
    </button>
  );
}
