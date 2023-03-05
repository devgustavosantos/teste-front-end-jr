import { Wrapper } from '../Wrapper';
import { subcategories } from './data';
import styles from './styles.module.scss';

const currentSubcategory = 'celular';

export function Subcategories() {
  return (
    <section>
      <Wrapper>
        <h2 className={styles.title}>Produtos relacionados</h2>

        <nav className={styles.navigation}>
          <ul className={styles.list}>
            {subcategories.map((subcategory) => (
              <li
                key={subcategory}
                className={styles.listItem}
              >
                <a
                  href="#"
                  className={styles.link}
                  data-variant-subcategory={
                    subcategory === currentSubcategory && 'current'
                  }
                >
                  {subcategory}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Wrapper>
    </section>
  );
}
