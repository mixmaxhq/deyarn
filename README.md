# `deyarn`

A command-line tool for converting projects that use `yarn` to `npm`.

The follow-up to [`npm2yarn`](https://github.com/mixmaxhq/npm2yarn). See https://mixmax.com/blog/to-yarn-and-back-again-npm for motivation.

## Procedure

`deyarn`:

1. Removes `yarn.lock` if it exists
2. Removes `node_modules` to avoid any installation conflicts
3. Installs your project dependencies using `npm`, generating a `package-lock.json` file
4. Logs a list of manual steps to be taken to complete the transition

This conversion will likely involve the upgrading of some/many of your transitive dependencies, so make sure to test thoroughly! :)

## Installation

```sh
$ npm install -g deyarn
```
or
```sh
$ yarn global add deyarn
```

## Usage

```
$ deyarn
```

## Contributing

We welcome your pull requests! Please lint your code.

## Changelog

* 1.0.0 Add initial code
