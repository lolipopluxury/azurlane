import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import * as path from 'path';

const pathResolve = (dir) => {
  return path.resolve(__dirname, dir);
};

// https://vitejs.dev/config/
export default defineConfig({
  base:'/',
  plugins: [vue()],
  resolve: {
    alias:{
      '@': pathResolve('src'),
      '@routes': pathResolve('src/routes'),
      '@style': pathResolve('src/style'),
    }
  },
  hostname: '127.0.0.1',
  open: true,
})
