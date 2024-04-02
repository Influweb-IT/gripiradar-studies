# Gripiradar Studies

## Setup

This repository uses submodules, init them first:

```bash
git submodule update --init --recursive
```

Then install the other dependencies:

```bash
yarn install
```

Then link each submodule package, eg:

```bash
cd packages/common-study-definition
yarn install
cd -
ln -s ../packages/common-study-definition node_modules/influenzanet-common-study
```

## Generate json

To build the Gripiradar studies together with surveys and rules run:

```
yarn generate
```

the `generate` task will take care of build all the submodules.