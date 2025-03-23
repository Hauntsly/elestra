import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load environment variables manually
  const env = loadEnv(mode, process.cwd(), '');

  console.log("🔍 Checking Vite Environment Variables:");
  console.log("✅ VITE_SUPABASE_URL:", env.VITE_SUPABASE_URL);
  console.log("✅ VITE_SUPABASE_KEY:", env.VITE_SUPABASE_KEY ? "Loaded" : "Missing!");

  return {
    plugins: [react()],
    define: {
      'process.env': env,  // This makes sure process.env is defined
    },
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  };
});
