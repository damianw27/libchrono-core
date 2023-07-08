module.exports = {
  overrides: [
    {
      files: '*.js',
      extends: ['eslint-config-crystal/node'],
    },
    {
      files: '*.ts',
      extends: ['eslint-config-crystal/typescript'],
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: './',
      },
    },
  ],
};
