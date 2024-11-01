module.exports = {
  '**/*.(js|jsx|ts|tsx)': filenames => [
    // `yarn lint ${filenames.join(' ')}`,
    'yarn build',
    `yarn format ${filenames.join(' ')}`,
    `git add ${filenames.join(' ')}`,
  ],
};
