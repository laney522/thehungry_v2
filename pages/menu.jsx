import styles from "../styles/PizzaList.module.css";
import PizzaCard1 from "../components/PizzaCard1"
import PizzaCard2 from '../components/PizzaCard2';
import PizzaCard3 from '../components/PizzaCard3';
import PizzaCard4 from '../components/PizzaCard4';

const PizzaList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN SEOUL</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.wrapper}>
          <PizzaCard1/>
          <PizzaCard2/>
          <PizzaCard3/>
          <PizzaCard4/>
 
      </div>
    </div>
  );
};

export default PizzaList;
