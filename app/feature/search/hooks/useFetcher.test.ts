import { useFetcher } from "./useFetcher";
import { type ArticleData } from "../../types/fetch.type";

// fetchをモック化
global.fetch = vi.fn();

describe("useFetcher", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("should fetch articles successfully", async () => {
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

  it("should handle fetch error", async () => {
    const mockFetch = vi.mocked(fetch);
    mockFetch.mockRejectedValueOnce(new Error("Network error"));

    await expect(useFetcher()).rejects.toThrow("Network error");
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("should handle empty response", async () => {
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

  it("should handle invalid JSON response", async () => {
    const mockFetch = vi.mocked(fetch);
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: vi.fn().mockRejectedValue(new Error("Invalid JSON")),
    } as unknown as Response);

    await expect(useFetcher()).rejects.toThrow("Invalid JSON");
  });
});

// テスト設定が完了していない場合のマニュアルテスト関数
export const manualTest = async () => {
  console.log("🧪 useFetcher Manual Test");

  try {
    console.log("📝 Testing useFetcher...");
    const result = await useFetcher();

    console.log("✅ Success:", {
      articlesCount: result.articles.length,
      firstArticle: result.articles[0]
        ? {
            id: result.articles[0].id,
            title: result.articles[0].title.substring(0, 50) + "...",
          }
        : null,
    });

    return true;
  } catch (error) {
    console.error("❌ Error:", error);
    return false;
  }
};

// マニュアルテストを実行（必要に応じてコメントアウト）
// manualTest();
