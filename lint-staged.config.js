module.exports = {
  '**/*.(js|ts|tsx)': ['prettier --write', 'eslint --fix', 'git add'],
};
