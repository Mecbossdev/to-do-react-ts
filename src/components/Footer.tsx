import React from 'react';

import styles from './Footer.module.css';

interface Props {
}

const Footer = (props: Props) => {
  return (
    <div>
      <footer className={styles.footer}>
        <p>
          <span>React + TS To-do</span> @2022
        </p>
      </footer>
    </div>
  )
};

export default Footer;
