import { Carrousel } from '../Carrousel';
import { Subcategories } from '../Subcategories';
import { Wrapper } from '../Wrapper';
import { products } from './data';
import styles from './styles.module.scss';

type SectionTitleProps = {
  withSubcategories: boolean;
};

export function SectionProducts({ withSubcategories }: SectionTitleProps) {
  return (
    <div>
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

        <Carrousel products={products} />
      </Wrapper>
    </div>
  );
}
