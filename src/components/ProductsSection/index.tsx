import { ProductInfos } from '../../types/product';
import { Card } from '../Card';
import { Carrousel } from '../Carrousel';
import { Subcategories } from '../Subcategories';
import { Wrapper } from '../Wrapper';
import styles from './styles.module.scss';

type SectionTitleProps = {
  withSubcategories: boolean;
  products: ProductInfos[];
};

export function ProductsSection({
  withSubcategories,
  products,
}: SectionTitleProps) {
  return (
    <Wrapper>
      <h2 className={styles.title}>Produtos relacionados</h2>
      {withSubcategories && <Subcategories />}
      {!withSubcategories && (
        <a
          href="#"
          className={styles.link}
        >
          Ver todos
        </a>
      )}

      <Carrousel variant="products">
        {products.map((product) => (
          <Card
            key={product.productName}
            productName={product.productName}
            photo={product.photo}
            price={product.price}
            descriptionShort={product.descriptionShort}
          />
        ))}
      </Carrousel>
    </Wrapper>
  );
}
