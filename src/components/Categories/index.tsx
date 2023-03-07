import { showAlertAboutDemoVersion } from '../../utils/alerts';
import { Wrapper } from '../Wrapper';
import { cards } from './data';
import styles from './styles.module.scss';

const currentCategory = 'Tecnologia';

export function Categories() {
  return (
    <section className={styles.container}>
      <Wrapper>
        <nav>
          <ul className={styles.list}>
            {cards.map((card) => (
              <li key={card.title}>
                <a
                  href="#"
                  className={
                    card.title === currentCategory
                      ? `${styles.link} ${styles.selected}`
                      : styles.link
                  }
                  onClick={showAlertAboutDemoVersion}
                >
                  <div className={styles.card}>
                    <img
                      src={card.icon}
                      alt={card.alt}
                      className={styles.image}
                    />
                  </div>
                  <p className={styles.title}>{card.title}</p>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Wrapper>
    </section>
  );
}
