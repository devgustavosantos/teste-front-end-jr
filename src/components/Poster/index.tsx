import { Button } from '../Button';
import styles from './styles.module.scss';

type PosterProps = {
  title: string;
  content: string;
  variant: 'middle' | 'large';
};

export function Poster({ title, content, variant }: PosterProps) {
  return (
    <div
      className={styles.container}
      data-variant-poster={variant}
    >
      <h3 className={styles.title}>{title}</h3>

      <p className={styles.content}>{content}</p>

      <Button
        title="Confira"
        variant="small"
      />
    </div>
  );
}
