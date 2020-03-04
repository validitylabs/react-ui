module.exports = {
    transform: {
      '.(ts|tsx)': 'ts-jest',
    },
    testPathIgnorePatterns: ['/node_modules/', '/lib/', '/build/', '/.storybook/', '/.storybook-static/'],
    testRegex: '(/test/.*|\\.(test|spec))\\.(ts|tsx|js)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
};