import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tailwindcss(),
    // Storybook実行時はReact Routerプラグインを無効化
    process.env.NODE_ENV !== "storybook" && reactRouter(),
    tsconfigPaths(),
  ].filter(Boolean), // falseな値を除外
});
