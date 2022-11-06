import styles from './Navigation.module.css';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className={styles.container}>
      <ul className={styles.navigation}>
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <Link href="/about">Acerca de</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/blogeros">Equipo</Link>
        </li>
      </ul>
    </nav>
  );
}
