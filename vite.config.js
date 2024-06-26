import {defineConfig} from "vite";
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import svgr from "vite-plugin-svgr";
export default defineConfig(() => {
    return {
        build: {
            outDir: 'build',
        },
        base: '/',
        server: {
            port: 3000,
        },
        plugins: [react(), tailwindcss(), svgr()],
    };
});