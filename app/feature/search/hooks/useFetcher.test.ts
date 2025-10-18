import { useFetcher } from "./useFetcher";
import { type ArticleData } from "../../types/fetch.type";

global.fetch = vi.fn();

describe("useFetcher", () => {
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
      {
        id: 2,
        title: "Test Article 2",
        body: "This is test article 2 content",
        userId: 2,
      },
    ];

    const mockFetch = vi.mocked(fetch);
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: vi.fn().mockResolvedValue(mockArticles),
    } as unknown as Response);

    const result = await useFetcher();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/posts"
    );
    expect(result).toEqual({
      articles: mockArticles,
    });
  });

  test("フェッチが失敗する場合、エラーメッセージを返すこと", async () => {
    const mockFetch = vi.mocked(fetch);
    mockFetch.mockRejectedValueOnce(new Error("Network error"));

    await expect(useFetcher()).rejects.toThrow("Network error");
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  test("フェッチが空の配列を返す場合、空の記事リストを返すこと", async () => {
    const mockFetch = vi.mocked(fetch);
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: vi.fn().mockResolvedValue([]),
    } as unknown as Response);

    const result = await useFetcher();

    expect(result).toEqual({
      articles: [],
    });
  });

  test("フェッチが無効なJSONレスポンスを返す場合、エラーメッセージを返すこと", async () => {
    const mockFetch = vi.mocked(fetch);
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: vi.fn().mockRejectedValue(new Error("Invalid JSON")),
    } as unknown as Response);

    await expect(useFetcher()).rejects.toThrow("Invalid JSON");
  });
});
