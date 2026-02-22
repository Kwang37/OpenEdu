import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// 使用独立域名 openeduinc.com 时，base 应为根路径 '/'
// 若需部署到 https://kwang37.github.io/OpenEdu/ 子路径，改为 base: '/OpenEdu/'
export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    port: 5173
  }
});

