import { fileURLToPath, URL } from 'url';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');

    return {
        base: '/fake-shop',
        build: {
          minify: false,
        },
        plugins: [
            vue(),
            vuetify({
                autoImport: true,
                styles: { configFile: 'src/scss/variables.scss' }
            })
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        },
        css: {
            preprocessorOptions: {
                scss: {}
            }
        },
        optimizeDeps: {
            exclude: ['vuetify'],
            entries: ['./src/**/*.vue']
        },
        server: env.PAYME_PROXY_TARGET
            ? {
                proxy: {
                    '/upc': {
                        target: env.PAYME_PROXY_TARGET,
                        changeOrigin: true,
                        secure: false,
                        rewrite: (path) => path.replace(/^\/upc/, ''),
                        configure: (proxy) => {
                            proxy.on('proxyReq', (proxyReq) => {
                                proxyReq.removeHeader('origin');
                                proxyReq.removeHeader('referer');
                            });
                        },
                    },
                },
            }
            : undefined,
    };
});
