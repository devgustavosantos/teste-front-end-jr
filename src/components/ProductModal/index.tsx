import cruz from '../../assets/cruz.svg';
import { formatOnMoney } from '../../utils/functions';
import styles from './styles.module.scss';
import { useProductModal } from './useProductModal';

export function ProductModal() {
  const { currentProduct, handleCloseProductModal } = useProductModal();

  if (!currentProduct) return <div />;

  return (
    <div className={styles.container}>
      <div className={styles.centerBox}>
        <button
          title="Botão de Fechar o modal."
          className={styles.button}
          onClick={handleCloseProductModal}
        >
          <img
            src={cruz}
            alt="Letra X"
            className={styles.buttonPhoto}
          />
        </button>

        <img
          src={currentProduct.photo}
          alt=""
          className={styles.productPhoto}
        />

        <div>
          <h4 className={styles.productName}>{currentProduct.productName}</h4>

          <p className={styles.price}>
            R$ {formatOnMoney(currentProduct.price)}
          </p>

          <p className={styles.productDescription}>
            {currentProduct.descriptionShort}
          </p>

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
