import cruz from '../../assets/cruz.svg';
import { ProductInfos } from '../../types/product';
import styles from './styles.module.scss';

export function ProductModal({
  productName,
  descriptionShort,
  photo,
  price,
}: ProductInfos) {
  return (
    <div className={styles.container}>
      <div className={styles.centerBox}>
        <button
          title="Botão de Fechar o modal."
          className={styles.button}
        >
          <img
            src={cruz}
            alt="Letra X"
            className={styles.buttonPhoto}
          />
        </button>

        <img
          src={photo}
          alt=""
          className={styles.productPhoto}
        />

        <div>
          <h4 className={styles.productName}>{productName}</h4>

          <p className={styles.price}>R$ {price}</p>

          <p className={styles.productDescription}>{descriptionShort}</p>

          <a
            href="#"
            className={styles.seeMoreInfo}
          >
            Veja mais detalhes do produto
          </a>
        </div>
      </div>
    </div>
  );
}
