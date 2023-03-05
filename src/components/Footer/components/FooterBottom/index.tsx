import econverseLogo from '../../../../assets/footer/econverse-logo.svg';
import vtexLogo from '../../../../assets/footer/vtex-logo.svg';
import { Wrapper } from '../../../Wrapper';
import styles from './styles.module.scss';

export function FooterBottom() {
  return (
    <div className={styles.container}>
      <Wrapper secondClassName={styles.wrapper}>
        <p className={styles.content}>
          Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas
          imagens são de propriedade de seus respectivos donos. É vedada a
          reprodução, total ou parcial, de qualquer conteúdo sem expressa
          autorização.
        </p>

        <div className={styles.brands}>
          <img
            src={econverseLogo}
            alt="Logo da Econverse"
          />
          <img
            src={vtexLogo}
            alt="Logo da Vtex"
          />
        </div>
      </Wrapper>
    </div>
  );
}
