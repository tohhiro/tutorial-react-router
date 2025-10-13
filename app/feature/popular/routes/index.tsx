import { useLoaderData } from "react-router";
import { useFetchPopular } from "../hooks/useFetchPopular";

export async function loader() {
  const { posts } = await useFetchPopular();
  return { posts };
}

export default function Popular() {
  const { posts } = useLoaderData<typeof loader>();

  return (
    <div className="sm:ml-56">
      <h1>人気記事</h1>
      <ul className="list-disc list-outside">
        {posts.map((post) => (
          <li key={post.id}>{`${post.id}: ${post.title}`}</li>
        ))}
      </ul>
    </div>
  );
}
