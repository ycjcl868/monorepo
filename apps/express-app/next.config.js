module.exports = {
  webpack: (config) => {
    config.externals.push({
      '@infras/native': "commonjs @infras/native",
    });
    return config;
  }
}
