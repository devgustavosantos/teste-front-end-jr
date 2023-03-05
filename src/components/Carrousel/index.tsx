import arrow from '../../assets/arrow.svg';
import { ProductInfos } from '../../types/product';
import { Card } from '../Card';
import { Wrapper } from '../Wrapper';
import styles from './styles.module.scss';

type CarrouselProps = {
  products: ProductInfos[];
};

const arrowDescription = 'Desenho de uma flecha apontada para ';

export function Carrousel({ products }: CarrouselProps) {
  return (
    <Wrapper>
      <div className={styles.container}>
        <button
          className={styles.buttons}
          title={`${arrowDescription} esquerda.`}
        >
          <img
            src={arrow}
            alt={`${arrowDescription} esquerda.`}
          />
        </button>

        <div className={styles.slider}>
          {products.map((product, index) => (
            <Card
              //ALTERAR A KEY PARA NÃO USAR O INDEX DO ARRAY!!!
              key={index}
              productName={product.productName}
              photo={product.photo}
              price={product.price}
            />
          ))}
        </div>

        <button
          className={styles.buttons}
          title={`${arrowDescription} direita.`}
        >
          <img
            src={arrow}
            alt={`${arrowDescription} direita.`}
          />
        </button>
      </div>
    </Wrapper>
  );
}
