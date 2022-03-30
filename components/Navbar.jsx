import Image from "next/image";
import Link from 'next/link';
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" passHref>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>070 8670 1010</div>
        </div>
      </div>
      </Link>
      <div className={styles.item}>
        <ul className={styles.list}>
        <Link href="/" passHref>
          <li className={styles.listItem}>Homepage</li>
        </Link>
        <Link href="/products" passHref>
          <li className={styles.listItem}>Products</li>
        </Link>
          <Image src="/img/logo.svg" alt="" width="160px" height="69px" />
        <Link href="/menu" passHref>
          <li className={styles.listItem}>Menu</li>
        </Link>
          <li className={styles.listItem}><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className={styles.item}>
      <Link href="/cart" passHref>
        <div className={styles.cart}>
          <Image src="/img/cart.png" alt="" width="30px" height="30px" />
          <div className={styles.counter}>2</div>
        </div>
      </Link>
      </div>
    </div>
  );
};

export default Navbar;
