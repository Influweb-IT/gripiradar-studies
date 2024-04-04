# Gripiradar Studies

## Setup

This repository uses submodules, init them first:

```bash
git submodule update --init --recursive
```

and build them, eg:

```bash
cd packages/common-study-definition
yarn install
yarn build
```

Then install all the dependencies:

```bash
yarn install
```

You may want to link a submodule when developing, using `yarn link` os simply:

```bash
ln -s ../packages/common-study-definition node_modules/influenzanet-common-study
```

## Generate json

To build the Gripiradar studies together with surveys and rules run:

```
yarn generate
```

the `generate` task will take care of build all the submodules.