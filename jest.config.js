module.exports = {
    transform: {
      '.(ts|tsx)': 'ts-jest',
    },
    testPathIgnorePatterns: ['/node_modules/', '/lib/', '/build/', '/.storybook/', '/.storybook-static/', '/.git/'],
    testRegex: '(/test/.*|\\.(test|spec))\\.(ts|tsx|js|jsx)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
};