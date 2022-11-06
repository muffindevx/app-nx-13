import { Suspense } from 'react';

async function fetchComments(id: string) {
  await new Promise((resolve: any) => setTimeout(() => resolve(), 3000));

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
    {
      next: {
        revalidate: 60,
      },
    },
  );

  return response.json();
}

export default async function Comments({ postId }: { postId: string }) {
  const comments = await fetchComments(postId);

  return (
    <ul>
      {comments.map((comment: any) => (
        <li key={comment.id}>{comment.name}</li>
      ))}
    </ul>
  );
}
