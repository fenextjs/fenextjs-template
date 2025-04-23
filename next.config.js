/** @type {import('next').NextConfig} */

// const withPWA = require('next-pwa')({
//   dest: 'public',
//   register: true,
//   skipWaiting: true,
//   disable: process.env.NODE_ENV === "development",
// });

// module.exports = withPWA({
//   reactStrictMode: true,

module.exports = {
    // reactStrictMode: true,
    async headers() {
      return [
        {
          source: '/api/:path*',
          headers: [
            {
              key: 'Access-Control-Allow-Origin',
              value: '*', // Permite cualquier origen
            },
            {
              key: 'Access-Control-Allow-Methods',
              value: 'GET, POST, PUT, DELETE, OPTIONS',
            },
            {
              key: 'Access-Control-Allow-Headers',
              value: 'Content-Type, Authorization',
            },
          ],
        },
      ];
    },
    webpack: (config) => {
        // Ignora archivos o directorios específicos al hacer build
        config.module.rules.push({
          test: /\/bun\/$/, // Puedes ajustar esto para excluir archivos específicos (e.g. archivos .test.js)
          use: 'null-loader', // Usa null-loader para evitar que estos archivos sean incluidos en el bundle
        });
    
        return config;
      },
}
