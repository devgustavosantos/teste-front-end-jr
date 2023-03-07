import { showAlertAboutDemoVersion } from '../../../../utils/alerts';
import { about, infos, paymentMethods, socialMedia } from './data';
import styles from './styles.module.scss';

export function FooterListBlock() {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <h4 className={styles.titles}>Sobre nós</h4>

        <ul>
          {about.map((item) => (
            <li key={item}>
              <a
                href="#"
                className={`${styles.links}`}
                onClick={showAlertAboutDemoVersion}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <ul className={styles.socialMedia}>
          {socialMedia.map((media) => (
            <li
              key={media.alt}
              className={styles.itemCentralizer}
            >
              <a
                href="#"
                className={`${styles.links} ${styles.itemCentralizer}`}
                onClick={showAlertAboutDemoVersion}
              >
                <img
                  src={media.image}
                  alt={media.alt}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className={styles.titles}>Informações úteis</h4>

        <ul>
          {infos.map((info) => (
            <li key={info}>
              <a
                href="#"
                className={styles.links}
                onClick={showAlertAboutDemoVersion}
              >
                {info}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className={styles.titles}>Formas de pagamento</h4>

        <ul className={styles.paymentMethods}>
          {paymentMethods.map((method) => (
            <li
              key={method.alt}
              className={styles.itemCentralizer}
            >
              <img
                src={method.image}
                alt={method.alt}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
