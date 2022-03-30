import styles from "../styles/Products.module.css";
import Product1 from '../components/Product1';
import Product2 from '../components/Product2';
import Product3 from '../components/Product3';
import Product4 from '../components/Product4';


const Product = () => {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Product1 />
        <Product2 />
        <Product3 />
        <Product4 />
      </div>
    </div>
  );
};

export default Product;
