import creditCard from '../../../../assets/header/credit-card.svg';
import shieldCheck from '../../../../assets/header/shield-check.svg';
import truck from '../../../../assets/header/truck.svg';
import styles from './styles.module.scss';

export function HeaderTop() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <img
          src={shieldCheck}
          alt="Desenho de um escudo de proteção"
          className={styles.image}
        />
        <p className={styles.text}>
          Compra <span className={styles.emphasis}>100% segura</span>
        </p>
      </div>
      <div className={styles.info}>
        <img
          src={truck}
          alt="Desenho de um caminhão"
          className={styles.image}
        />
        <p className={styles.text}>
          <span className={styles.emphasis}>Frete grátis</span> acima de R$ 200
        </p>
      </div>
      <div className={styles.info}>
        <img
          src={creditCard}
          alt="Desenho de um cartão de crédito"
          className={styles.image}
        />
        <p className={styles.text}>
          <span className={styles.emphasis}>Parcele</span> suas compras
        </p>
      </div>
    </div>
  );
}
