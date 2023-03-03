
import magnifyingGlass from '../../../../assets/magnifying-glass.svg';
import vtexLogo from '../../../../assets/vtex-logo.svg';
import { links } from './data';
import styles from './styles.module.scss';

export function HeaderMid() {
  return (
    <div className={styles.container}>
      <a
        href="#"
        className={styles.centerItems}
      >
        <img
          src={vtexLogo}
          alt="Desenho do logo da VTEX"
          className={styles.logo}
        />
      </a>

      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="O que você está buscando?"
          className={styles.searchBarInput}
        />
        <button
          title="Buscar"
          className={styles.searchBarButton}
        >
          <img
            src={magnifyingGlass}
            alt="Ícone de uma lupa"
            className={styles.searchBarIcon}
          />
        </button>
      </div>

      <nav className={styles.centerItems}>
        <ul className={styles.list}>
          {links.map((link) => (
            <li
              key={link.title}
              title={link.title}
            >
              <a
                href="#"
                className={styles.centerItems}
              >
                <img
                  src={link.icon}
                  alt={link.alt}
                  className={styles.navigationLogo}
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
