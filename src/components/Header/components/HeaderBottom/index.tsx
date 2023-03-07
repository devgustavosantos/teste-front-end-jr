import { showAlertAboutDemoVersion } from '../../../../utils/alerts';
import { links } from './data';
import styles from './styles.module.scss';

const currentLink = 'Ofertas do dia';

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
              className={
                link.title === currentLink
                  ? `${styles.link} ${styles.current}`
                  : styles.link
              }
              onClick={showAlertAboutDemoVersion}
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
