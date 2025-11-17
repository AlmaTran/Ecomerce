import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@styles': path.resolve(__dirname, 'src/assets/styles'),
      '@icons': path.resolve(__dirname, 'src/assets/icons'),
      '@pages': path.resolve(__dirname, 'src/pages'),

    }
  },
  //  server: {
  //   host: true,        // lắng nghe 0.0.0.0 (truy cập được qua 127.0.0.1)
  //   port: 5174,
  //   strictPort: true,  // báo lỗi nếu cổng bận
  //   hmr: {
  //     host: '127.0.0.1',
  //     port: 5174,
  //     clientPort: 5174,
  //   },
  // },
});
