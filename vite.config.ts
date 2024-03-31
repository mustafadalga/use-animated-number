import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: "./src/use-animated-number.ts",
            name: 'use-animated-number',
            fileName: 'use-animated-number',
        },
        rollupOptions: {
            external: [ "react" ],
            output: {
                globals: {
                    react: "React",
                },
            },
        },
    }
})