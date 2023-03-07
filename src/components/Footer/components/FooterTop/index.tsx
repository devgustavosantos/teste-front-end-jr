import { Wrapper } from '../../../Wrapper';
import { FooterListBlock } from '../FooterListBlock';
import { FooterNewsletter } from '../FooterNewsletter';
import styles from './styles.module.scss';

export function FooterTop() {
  return (
    <div className={styles.container}>
      <Wrapper secondClassName={styles.wrapper}>
        <FooterListBlock />

        <FooterNewsletter />
      </Wrapper>
    </div>
  );
}
