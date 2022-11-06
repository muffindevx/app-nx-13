import { Suspense } from 'react';
import Comments from '../../components/Comments/Comments';

async function fetchPostById(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );

  return response.json();
}

export default async function PagePostDetail({
  params,
}: {
  params: { id: string };
}) {
  const post = await fetchPostById(params.id);

  return (
    <>
      <article>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <h4>Comentarios</h4>
        <Suspense fallback={<div>Cargando comentarios...</div>}>
          {/* @ts-expect-error Server Component */}
          <Comments postId={post.id} />
        </Suspense>
      </article>
    </>
  );
}
