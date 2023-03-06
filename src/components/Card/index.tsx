import { ProductInfos } from '../../types/product';
import { Button } from '../Button';
import styles from './styles.module.scss';
import { useCard } from './useCard';

export function Card({
  productName,
  descriptionShort,
  photo,
  price,
}: ProductInfos) {
  const {
    priceFormatted,
    oldPriceFormatted,
    installment,
    installmentPriceFormatted,
    handleOpenProductModal,
  } = useCard({
    productName,
    descriptionShort,
    photo,
    price,
  });

  return (
    <article
      className={styles.container}
      onClick={handleOpenProductModal}
    >
      <img
        src={photo}
        alt=""
        className={styles.image}
      />

      <p className={styles.name}>{productName}</p>

      <p className={styles.oldPrice}>R$ {oldPriceFormatted}</p>

      <p className={styles.newPrice}>R$ {priceFormatted}</p>

      <p className={styles.installment}>
        ou {installment}x de R$ {installmentPriceFormatted} sem juros
      </p>

      <p className={styles.freight}>Frete grátis</p>

      <Button
        title="Comprar"
        variant="large"
      />
    </article>
  );
}
