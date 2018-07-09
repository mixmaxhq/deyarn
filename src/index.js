/* eslint no-console: "off" */

const chalk = require('chalk');
const { spawnSync } = require('child_process');
const fs = require('fs');
const del = require('del');
const editJsonFile = require('edit-json-file');


module.exports = () => {
  console.log(chalk.magenta('\ndeyarn...\n'));

  const yarnLockPath = `${process.cwd()}/yarn.lock`;
  if (fs.existsSync(yarnLockPath)) {
    // Remove yarn.lock.
    console.log(chalk.blue('\nRemoving `yarn.lock`.'));

    del.sync(yarnLockPath);

    if (fs.existsSync(yarnLockPath)) {
      console.log(chalk.red('Failed to delete `yarn.lock`'));
      process.exit(1);
    }

    console.log(chalk.blue('Removed `yarn.lock`.'));
  }

  // Remove node_modules if they exist in order to avoid any potential installation conflicts.
  const nodeModsPath = `${process.cwd()}/node_modules`;
  if (fs.existsSync(nodeModsPath)) {
    console.log(chalk.blue('\nRemoving `node_modules`.'));

    del.sync(nodeModsPath);

    if (fs.existsSync(nodeModsPath)) {
      console.log(chalk.red('Failed to delete `node_modules`'));
      process.exit(1);
    }

    console.log(chalk.blue('Removed `node_modules`.'));
  }

  // Run `npm i`.
  console.log(chalk.blue('\nInstalling dependencies with npm; generating `package-lock.json`.'));
  spawnSync('npm', ['i'] /* empty args */, {
    stdio: 'inherit'
  });

  // Require that users of this package use npm rather than Yarn since it's easy to forget :).
  const packageJsonPath = `${process.cwd()}/package.json`;
  const packageJson = editJsonFile(packageJsonPath, {
    autosave: true
  });
  packageJson.set('engines.yarn', undefined);

  // Output success.

  console.log(chalk.green('\n\nSuccess!\n'));
  console.log('NEXT STEPS:');
  console.log('  1. Perform any testing to ensure that package updates were not problematic.');
  console.log('  2. Update package.json scripts to use npm if necessary:');
  console.log('    ', chalk.cyan(JSON.stringify(packageJson.get('scripts'))));
  console.log('  3. Update your CI configuration if necessary');
  console.log('  4. Update the README if necessary');
  console.log('    - Add preferred npm-install instruction');
  console.log('    - Update any other Yarn commands to use npm instead');
  console.log('  5. Commit the made changes');
};
