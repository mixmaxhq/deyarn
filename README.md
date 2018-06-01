# `deyarn`

A command-line tool for converting projects that use `yarn` to `npm`.

The follow-up to [`npm2yarn`](https://github.com/mixmaxhq/npm2yarn). See https://mixmax.com/blog/to-yarn-and-back-again-npm for motivation.

## Procedure

`deyarn`:

1. Checks out the `master` branch
2. Pulls the latest changes
3. Checks out a new branch, `deyarnify`, overwriting any existing `deyarnify` branch
4. Removes `yarn.lock` if it exists
5. Removes `node_modules` to avoid any installation conflicts
6. Installs your project dependencies using `npm`, generating a `package-lock.json` file
7. Runs `npm test` as a sanity check
8. Stages the changes made
9. Logs a list of manual steps to be taken to complete the transition

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

(in the directory of the project to convert, which must be a Git repository)
```
$ deyarn
```

## Contributing

We welcome your pull requests! Please lint your code.

## Changelog

* 1.0.0 Add initial code
