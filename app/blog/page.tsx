import Link from 'next/link';
import Card from '../components/Card/Card';
import styles from './page.module.css';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60,
    },
  });
  return response.json();
};

export default async function Blog() {
  const posts = await fetchPosts();

  return (
    <main>
      <h3 className={styles.title}>Últimas publicaciones</h3>
      <section className={styles.list}>
        {posts.map((post: any) => (
          <Link className={styles.link} key={post.id} href={`/blog/${post.id}`}>
            <Card title={post.title} content={post.body} />
          </Link>
        ))}
      </section>
    </main>
  );
}
