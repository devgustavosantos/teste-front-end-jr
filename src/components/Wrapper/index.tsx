import { ReactNode } from 'react';

import styles from './styles.module.scss';
import { useWrapper } from './useWrapper';

type WrapperProps = {
  children: ReactNode;
  secondClassName?: string;
};

export function Wrapper({ children, secondClassName }: WrapperProps) {
  const { finalClassName } = useWrapper({
    firstClassName: styles.container,
    secondClassName,
  });

  return <div className={finalClassName}>{children}</div>;
}
