import styles from "../styles/Products.module.css";
import Image from "next/image";
import Link from 'next/link';

const Product1 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
      <Link href={`/product/211`} passHref>
        <Image src="/img/pizza1.png" alt="" width="500" height="500" />
      </Link>  
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>PEPPERONI</h1>
        <span className={styles.price}>$19.90</span>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      
    </div>
  );
};

export default Product1;
