import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      {/* 12 horoscope */}
      <div className={styles.horoscops}>Aries | Taurus | Scorpion</div>
      <ul className={styles.navLinks}>
        <li>
          <a href="">Home</a> <br />
          <a href="">About</a>
          <a href="">Amharic</a>
          <a href="">English</a>
        </li>
      </ul>
      <p className={styles.footerText}>2025 copyright</p>
      {/* social icons  */}
      <div className={styles.socialIcons}>
        <img src="/icons/facebook.svg" alt="facebook" />
        <img src="/icons/instagram.svg" alt="instagram" />
        <img src="/icons/youtube.svg" alt="youtube" />
      </div>
    </div>
  );
};

export default Footer;
