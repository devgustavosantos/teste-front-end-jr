import { ReactNode } from 'react';

import styles from './styles.module.scss';

type WrapperProps = {
  children: ReactNode;
};

export function Wrapper({ children }: WrapperProps) {
  return <div className={styles.container}>{children}</div>;
}
