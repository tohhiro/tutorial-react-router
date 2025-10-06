import { useLoaderData } from "react-router";

interface Post {
  id: number;
  title: string;
}

export async function loader() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  const posts: Post[] = await res.json();
  return { posts };
}

export default function Home() {
  const { posts } = useLoaderData<typeof loader>();

  return (
    <div className="sm:ml-64">
      <h1>記事一覧です</h1>
      <ul className="list-disc list-outside">
        {posts.map((post: Post) => (
          <li key={post.id}>{`${post.id}: ${post.title}`}</li>
        ))}
      </ul>
    </div>
  );
}
