import styles from './styles.module.scss';

export function LoadingScreen() {
  return (
    <div className={styles.container}>
      <div className={styles.circle}></div>
      <p className={styles.loading}>Carregando...</p>
      <p className={styles.justMoment}>Só mais um momento...</p>
    </div>
  );
}
