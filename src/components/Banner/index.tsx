import { showAlertAboutDemoVersion } from '../../utils/alerts';
import { Button } from '../Button';
import { Wrapper } from '../Wrapper';
import styles from './styles.module.scss';

export function Banner() {
  return (
    <section className={styles.container}>
      <Wrapper>
        <p className={styles.callToAction}>Venha conhecer nossas promoções</p>
        <p className={styles.info}>50% Off nos produtos </p>
        <Button
          title="Ver produto"
          variant="medium"
          onClick={showAlertAboutDemoVersion}
        />
      </Wrapper>
    </section>
  );
}
