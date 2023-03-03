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
                  className={styles.link}
                >
                  <div className={styles.card}>
                    <img
                      src={card.icon}
                      alt={card.alt}
                      className={styles.image}
                      data-image-variant={
                        card.title === currentCategory && 'selected'
                      }
                    />
                  </div>
                  <p
                    className={styles.title}
                    data-title-variant={
                      card.title === currentCategory && 'selected'
                    }
                  >
                    {card.title}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Wrapper>
    </section>
  );
}
