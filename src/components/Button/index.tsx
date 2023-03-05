import styles from './styles.module.scss';

type ButtonProps = {
  title: string;
  variant: 'small' | 'medium' | 'large';
};

export function Button({ title, variant }: ButtonProps) {
  return (
    <button
      type="button"
      className={`${styles.container} ${styles[variant]}`}
    >
      {title}
    </button>
  );
}
