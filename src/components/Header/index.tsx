import { Wrapper } from '../Wrapper';
import { HeaderBottom } from './components/HeaderBottom';
import { HeaderMid } from './components/HeaderMid';
import { HeaderTop } from './components/HeaderTop';
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.container}>
      <Wrapper>
        <HeaderTop />
        <HeaderMid />
        <HeaderBottom />
      </Wrapper>
    </header>
  );
}
