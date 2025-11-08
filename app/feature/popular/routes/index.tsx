import { useLoaderData } from "react-router";
import { useFetchPopular } from "../hooks/useFetchPopular";
import { PopularPresenter } from "../components/PopularPage/index.presenter";

export async function loader() {
  const { articles } = await useFetchPopular();
  return { articles };
}

export default function PopularContainer() {
  const { articles } = useLoaderData<typeof loader>();

  return <PopularPresenter articles={articles} />;
}
