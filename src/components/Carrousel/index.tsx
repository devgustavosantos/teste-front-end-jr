import { ReactNode } from 'react';

import arrow from '../../assets/arrow.svg';
import { arrowDescription } from './data';
import styles from './styles.module.scss';
import { useCarrousel } from './useCarrousel';

type CarrouselProps = {
  children: ReactNode;
  variant: 'products' | 'brands';
};

export function Carrousel({ children, variant }: CarrouselProps) {
  const {
    carousel,
    firstItemOfCarrousel,
    lastItemOfCarrousel,
    handleCarouselLeft,
    handleCarouselRight,
  } = useCarrousel();

  return (
    <div className={styles.container}>
      <button
        className={`${styles.buttons} ${styles[variant]} ${
          variant === 'brands' && firstItemOfCarrousel ? styles.disabled : ''
        }`}
        title={`${arrowDescription} esquerda.`}
        onClick={handleCarouselLeft}
      >
        <img
          src={arrow}
          alt={`${arrowDescription} esquerda.`}
          className={`${styles.arrow} ${styles[variant]}`}
        />
      </button>

      <div
        className={`${styles.slider} ${styles[variant]}`}
        ref={carousel}
      >
        {children}
      </div>

      <button
        className={`${styles.buttons} ${styles[variant]} ${
          variant === 'brands' && lastItemOfCarrousel ? styles.disabled : ''
        }`}
        title={`${arrowDescription} direita.`}
        onClick={handleCarouselRight}
      >
        <img
          src={arrow}
          alt={`${arrowDescription} direita.`}
          className={`${styles.arrow} ${styles[variant]}`}
        />
      </button>
    </div>
  );
}
