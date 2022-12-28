import Image from "next/image";
import styles from "../styles/Footer.module.css";
import { BsGrid3X3GapFill } from 'react-icons/bs';

import {AiFillFacebook} from 'react-icons/ai'
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item1}>
        
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID.THE PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
           123,Surat
            <br /> Gujarat.
            <br /> 9876543210
          </p>

        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
