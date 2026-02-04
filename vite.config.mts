import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// GitHub Pages 部署到 https://kwang37.github.io/OpenEdu/ 时，
// 需要设置 base 为仓库名路径，确保资源引用正确。
export default defineConfig({
  base: "/OpenEdu/",
  plugins: [react()],
  server: {
    port: 5173
  }
});

