import type { ElectrobunConfig } from 'electrobun';

export default {
  app: {
    name: 'Desktop Tienda',
    identifier: 'desktop-tienda.electrobun.dev',
    version: '2.0.0',
  },
  build: {
    copy: {
      'dist/index.html': 'views/mainview/index.html',
      'dist/assets': 'views/mainview/assets',
    },
    watchIgnore: ['dist/**'],
    mac: {
      bundleCEF: false,
    },
    linux: {
      bundleCEF: false,
    },
    win: {
      bundleCEF: false,
      icon: 'src/mainview/assets/Logo.ico', // Note: Windows usually requires .ico for the taskbar icon
    },
  },
} satisfies ElectrobunConfig;
