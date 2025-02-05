/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Genera una versión estática
  basePath: process.env.NODE_ENV === 'production' ? '/DolceVino' : '', // Cambia 'nombre-repositorio' por el nombre de tu repositorio
  assetPrefix: process.env.NODE_ENV === 'production' ? '/DolceVino/' : '', // Mismo que arriba
};

module.exports = nextConfig;