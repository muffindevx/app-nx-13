import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

async function fetchBloggers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  return response.json();
}

export default async function BloggersPage() {
  const bloggers = await fetchBloggers();

  return (
    <section className={styles.bloggers}>
      <h2 className={styles.title}>Nuestro maravilloso equipo</h2>
      <ul className={styles.list}>
        {bloggers.map((blogger: any) => (
          <li key={blogger.id}>
            <Link key={blogger.id} href={`/blogeros/bio/${blogger.id}`}>
              <Image
                src={`https://ui-avatars.com/api/?name=${blogger.name}`}
                alt={`Avatar de ${blogger.name}`}
                height={50}
                width={50}
              />
            </Link>
            <div className={styles.user}>
              <h6>
                {blogger.name} - @{blogger.username}
              </h6>
              <small>{blogger.email}</small>
              <small>
                <Link href={blogger.website} target="_blank">
                  {blogger.website}
                </Link>
              </small>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
