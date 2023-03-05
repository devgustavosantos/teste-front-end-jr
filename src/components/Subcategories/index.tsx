import { subcategories } from './data';
import styles from './styles.module.scss';

const currentSubcategory = 'celular';

export function Subcategories() {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        {subcategories.map((subcategory) => (
          <li
            key={subcategory}
            className={styles.listItem}
          >
            <a
              href="#"
              className={
                subcategory === currentSubcategory
                  ? `${styles.link} ${styles.current}`
                  : styles.link
              }
            >
              {subcategory}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
