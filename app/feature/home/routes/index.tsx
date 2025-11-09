import { useLoaderData } from "react-router";
import { useFetchLimit } from "../hooks/useFetchLimit";
import { HomePresenter } from "../components/HomePage/index.presenter";

export async function loader() {
  return await useFetchLimit();
}

export const HomeContainer = () => {
  const { articles } = useLoaderData<typeof loader>();

  return <HomePresenter articles={articles} />;
};
