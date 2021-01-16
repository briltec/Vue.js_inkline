import path from 'path';
import vue from '@vitejs/plugin-vue'

export default {
    plugins: [vue()],
    alias: [
        {
            find: /^@\//,
            replacement: `${path.resolve(__dirname, 'src')}/`
        }
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/inkline.js'),
            name: 'Inkline'
        },
        rollupOptions: {
            external: ['vue']
        }
    }
}
