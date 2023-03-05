import { Carrousel } from '../Carrousel';
import { Wrapper } from '../Wrapper';
import { brands } from './data';
import styles from './styles.module.scss';

export function Brands() {
  return (
    <Wrapper>
      <h2 className={styles.title}>Navegue por marcas</h2>

      <Carrousel variant="brands">
        {brands.map((brand, index) => (
          <article
            key={index}
            className={styles.brand}
          >
            <a
              href="#"
              className={styles.link}
            >
              <img
                src={brand.image}
                alt=""
              />
            </a>
          </article>
        ))}
      </Carrousel>
    </Wrapper>
  );
}
