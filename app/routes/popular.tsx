import { useLoaderData } from "react-router";

type Post = {
  id: number;
  title: string;
};

export async function loader() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?id=2&id=10"
  );
  const posts: Post[] = await res.json();
  return { posts };
}

export default function Popular() {
  const { posts } = useLoaderData<typeof loader>();

  return (
    <div className="sm:ml-56">
      <h1>人気記事</h1>
      <ul className="list-disc list-outside">
        {posts.map((post: Post) => (
          <li key={post.id}>{`${post.id}: ${post.title}`}</li>
        ))}
      </ul>
    </div>
  );
}
