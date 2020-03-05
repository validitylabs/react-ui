# REACT UI

@TODO: check Jest tests on bit.dev
@TODO: copy assets / README.md to be considered by bit.dev

## Get Automatic PRs for Component Updates

@see https://blog.bitsrc.io/announcing-auto-github-prs-for-component-version-bumping-74e7768bcd8a

## build / deploy procedure 🚧

```bash
bit init
bit login
npm install

npm run compile

bit add build/src/components/* -t 'build/src/components/{PARENT}/*.test.js'
bit status
bit test
bit build
bit tag --all 0.0.1
bit export validitylabs.react-ui
```
