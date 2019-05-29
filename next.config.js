module.exports = {
  webpack: config => {
    // config.module.rules.push({
    //   test: /\.js$/,
    //   exclude: /(node_modules)/,
    //   use: {
    //     loader: 'babel-loader'
    //   }
    // });

    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    });

    // config.module.rules.push({
    //   test: /\.scss$/,
    //   use: 'sass-loader'
    // });

    return config;
  }
};
