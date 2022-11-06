async function fetchAlbums(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}/albums`,
    {
      next: {
        revalidate: 60,
      },
    },
  );

  return response.json();
}

export default async function Albums({ userId }: { userId: string }) {
  const albums = await fetchAlbums(userId);
  return (
    <section>
      <ul>
        {albums.map((album: any) => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </section>
  );
}
