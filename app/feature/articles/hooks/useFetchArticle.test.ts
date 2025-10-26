import { useFetchArticle } from "./useFetchArticle";
import { type ArticleData } from "../../types/fetch.type";

global.fetch = vi.fn();

describe("useFetchArticle", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  test("フェッチが成功する場合、記事データを返すこと", async () => {
    const mockArticles: ArticleData[] = [
      {
        id: 1,
        title: "Test Article 1",
        body: "This is test article 1 content",
        userId: 1,
      },
    ];

    const mockFetch = vi.mocked(fetch);
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: vi.fn().mockResolvedValue(mockArticles),
    } as unknown as Response);

    const result = await useFetchArticle("1");

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    expect(result).toEqual({
      article: mockArticles,
    });
  });

  test("フェッチが失敗する場合、エラーメッセージを返すこと", async () => {
    const mockFetch = vi.mocked(fetch);
    mockFetch.mockRejectedValueOnce(new Error("Network error"));

    await expect(useFetchArticle("1")).rejects.toThrow("Network error");
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  test("フェッチが無効なJSONレスポンスを返す場合、エラーメッセージを返すこと", async () => {
    const mockFetch = vi.mocked(fetch);
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: vi.fn().mockRejectedValue(new Error("Invalid JSON")),
    } as unknown as Response);

    await expect(useFetchArticle("1")).rejects.toThrow("Invalid JSON");
  });
});
