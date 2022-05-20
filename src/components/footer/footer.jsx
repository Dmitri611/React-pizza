import React from "react";
import styles from "./footer.module.scss";
import FooterList from "./footer-list/footer-list";
import Logo from "../logo/logo";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <Logo className={styles.footer__logo} />
        <FooterList />
      </div>
    </footer>
  );
};

export default Footer;
