import { links } from './data';
import styles from './styles.module.scss';

export function HeaderBottom() {
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        {links.map((link) => (
          <li
            key={link.title}
            className={styles.listItem}
          >
            <a
              href="#"
              className={styles.link}
              data-current-page={link.title === 'Ofertas do dia' && 'current'}
            >
              {link.icon && (
                <img
                  src={link.icon}
                  alt={link.alt}
                  className={styles.image}
                />
              )}

              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
