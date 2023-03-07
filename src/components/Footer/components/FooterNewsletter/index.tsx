import { showAlertAboutDemoVersion } from '../../../../utils/alerts';
import { Button } from '../../../Button';
import styles from './styles.module.scss';

export function FooterNewsletter() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        Cadastre-se e Receba nossas{' '}
        <strong className={styles.emphasis}>novidades e promoções</strong>
      </h3>

      <p className={styles.content}>
        Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem
        ipsum
      </p>

      <div className={styles.inputContainer}>
        <input
          type="email"
          placeholder="Seu e-mail"
          className={styles.input}
        />
        <Button
          title="OK"
          variant="small"
          onClick={showAlertAboutDemoVersion}
        />
      </div>
    </div>
  );
}
