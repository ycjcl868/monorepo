module.exports = {
  extends: '../../../react.js',
  rules: {
    // custom
    'rulesdir/text-specification': [
      'error',
      {
        checkItems: ['您'],
      },
    ],
  },
};
