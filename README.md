# REACT UI

@see https://bit.dev/validitylabs/react-ui

@TODO: Auto namespaces => bit add build/src/_ -t 'build/src/\*\*/_.test.js'
@TODO: Figure out how to ignore build/dist folders from Git (bit relies on .gitignore)

## Get Automatic PRs for Component Updates

@see https://blog.bitsrc.io/announcing-auto-github-prs-for-component-version-bumping-74e7768bcd8a

## build / deploy procedure 🚧

```bash
# You need to initialize your terminal session first
bit init
bit login

# Install / compile the project, if needed
npm install
npm run compile

# Add / update all components + export
bit add build/src/components/* -t 'build/src/components/**/*.test.js'
# bit add "build/src/**/*" -t "build/src/**/*.test.js"
bit status
bit build
bit tag --all 0.0.1
bit test
bit export validitylabs.react-ui

# Remove a component from a remote collection
bit remove validitylabs.react-ui/<COMPONENT_NAMESPACE> --remote

# Remove a component from local workspace
bit remove <COMPONENT_NAMESPACE>

# Deprecate a component in a remote collection
bit deprecate validitylabs.react-ui/<COMPONENT_NAMESPACE> --remote

# Deprecate a component from local workspace
bit deprecate <COMPONENT_NAMESPACE>

```

## Troubleshooting

```
# In case of emergency, call the doctor
bit doctor

rm -fr .git/bit/components/*
```

If bit can not find a module, the bit compiler / tester needs to be force reinstalled:

```bash
# error: bit failed to load bit.envs/testers/jest@22.4.3 with the following exception:
# Cannot find module '@bit/bit.utils.file.extract-file-name-from-path'
# @see https://github.com/teambit/bit/issues/1332
rm -fr .git/bit/components/*
```
