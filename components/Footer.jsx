import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID.THE LANEY PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            19, Olympic-ro 32-gil,
            <br /> SongPa-gu, 85021
            <br /> (070) 8670-1010
          </p>
          <p className={styles.text}>
            269, Olympic-ro,
            <br /> SongPa-gu, 85022
            <br /> (070) 8670-1011
          </p>
          <p className={styles.text}>
            135, Wiryedong-ro
            <br /> Sujeong-gu,, 63023
            <br /> (070) 8670-1012
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
