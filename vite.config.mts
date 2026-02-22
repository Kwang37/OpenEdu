import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// 使用自定义域名 openeduinc.com 时，base 需为根路径 '/'
export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    port: 5173
  }
});

