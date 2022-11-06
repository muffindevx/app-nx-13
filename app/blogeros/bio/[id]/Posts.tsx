import Link from 'next/link';

async function fetchPosts(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}/posts`,
    {
      next: {
        revalidate: 60,
      },
    },
  );

  return response.json();
}

export default async function Posts({ userId }: any) {
  const posts = await fetchPosts(userId);
  return (
    <section>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
