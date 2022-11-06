async function fetchPostById(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );

  return response.json();
}

export default async function Head({ params }: { params: { id: string } }) {
  const post = await fetchPostById(params.id);

  return (
    <>
      <title>Blosfera &bull; {post.title}</title>
    </>
  );
}
