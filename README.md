# REACT UI

## Get Automatic PRs for Component Updates

@see https://blog.bitsrc.io/announcing-auto-github-prs-for-component-version-bumping-74e7768bcd8a


bit init
bit login
npm install
bit add src/components/* -t 'src/components/{PARENT}/*.test.js'
bit status
bit import bit.envs/compilers/react-typescript --compiler
bit import bit.envs/testers/jest --tester

bit test
