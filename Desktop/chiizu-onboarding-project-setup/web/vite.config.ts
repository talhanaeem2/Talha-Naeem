import { CommonServerOptions, defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import tsconfigPaths from "vite-tsconfig-paths";

const commonServerOptions: CommonServerOptions = {
  port: 3000,
  host: true,
  open: true,
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: commonServerOptions,
  preview: commonServerOptions,
  build: {
    chunkSizeWarningLimit: 750,
    minify: "terser",
  },
  esbuild: {
    // Ref: https://github.com/vitejs/vite/issues/8644#issuecomment-1159308803
    logOverride: { "this-is-undefined-in-esm": "silent" }
  }
})
