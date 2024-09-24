import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import fs from 'fs';

const ROOT_DIR = path.resolve(__dirname, 'src');
const CERT_KEY_PATH = path.resolve(__dirname, 'key.pem');
const CERT_PATH = path.resolve(__dirname, 'cert.pem');

// Utility function to check for the existence of SSL certificate files
const checkSSLCertificates = () => {
  if (!fs.existsSync(CERT_KEY_PATH) || !fs.existsSync(CERT_PATH)) {
    console.error('SSL certificates not found. Please run `npm run tool:generate-ssl`.');
    process.exit(1);
  }
};

// Check if SSL is enabled
const isSSLEnabled = process.env.VITE_USE_SSL === 'true';

if (isSSLEnabled) {
  checkSSLCertificates();
}

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [vue()],
    base: '/',
    resolve: {
      alias: {
        '@': ROOT_DIR,
        '~assets': path.join(ROOT_DIR, 'assets'),
        '~components': path.join(ROOT_DIR, 'components'),
        '~styles': path.join(ROOT_DIR, 'styles'),
        '~utils': path.join(ROOT_DIR, 'utils'),
      },
    },
    server: {
      https: isSSLEnabled
        ? {
          key: fs.readFileSync(CERT_KEY_PATH),
          cert: fs.readFileSync(CERT_PATH),
        }
        : false,
    },
  };
});
