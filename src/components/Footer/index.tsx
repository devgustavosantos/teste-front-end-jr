
import { FooterBottom } from './components/FooterBottom';
import { FooterTop } from './components/FooterTop';
import styles from './styles.module.scss';

export function Footer() {
  return (
    <footer className={styles.container}>
      <FooterTop />

      <FooterBottom />
    </footer>
  );
}
