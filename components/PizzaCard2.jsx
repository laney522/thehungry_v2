import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";
import Link from 'next/link';

const PizzaCard2 = () => {

  return (
    <div className={styles.container}>
      <Link href={`/product/212`} passHref>
        <Image src="/img/pizza2.png" alt="" width="500" height="500" />
      </Link> 
      <h1 className={styles.title}>RICOTTA</h1>
      <span className={styles.price}>$19.90</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default PizzaCard2;
