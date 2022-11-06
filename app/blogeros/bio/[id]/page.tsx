import Image from 'next/image';
import { Suspense } from 'react';
import Albums from './Albums';
import Posts from './Posts';
import styles from './page.module.css';

async function fetchBiography(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    {
      next: {
        revalidate: 60,
      },
    },
  );

  return response.json();
}

export default async function BioPage({ params }: any) {
  const bloggerBio = await fetchBiography(params.id);
  const avatarUrl = `https://ui-avatars.com/api/?name=${bloggerBio.name}`;
  return (
    <section className={styles.bio}>
      <div className={styles.user}>
        <Image
          src={avatarUrl}
          alt={`Avatar del bloguero ${bloggerBio.name}`}
          width={50}
          height={50}
          className={styles['user-avatar']}
        />
        <div className={styles['user-info']}>
          <h3>{bloggerBio.name}</h3>
          <h6>{bloggerBio.email}</h6>
          <h6>{bloggerBio.username}</h6>
        </div>
      </div>
      <section>
        <h3>Albumes</h3>
        <Suspense fallback={<div>Cargando albumes...</div>}>
          {/* @ts-expect-error Server Component */}
          <Albums userId={params.id} />
        </Suspense>
      </section>
      <section>
        <h3>Posts</h3>
        <Suspense fallback={<div>Cargando posts...</div>}>
          {/* @ts-expect-error Server Component */}
          <Posts userId={params.id} />
        </Suspense>
      </section>
    </section>
  );
}
