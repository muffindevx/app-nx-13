import styles from './Card.module.css';

type CardProps = {
  title: string;
  content: string;
};

export default function Card({ title, content }: CardProps) {
  return (
    <article className={styles.card}>
      <h2 className={styles['card-title']}>{title}</h2>
      <p className={styles['card-content']}>{content}</p>
    </article>
  );
}
