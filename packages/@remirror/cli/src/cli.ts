import { Cli } from 'clipanion';
import { getVersion, loadPackageJson } from 'json.macro';

import { BundleCommand, HelpCommand, VersionCommand } from './commands';
import type { CommandContext } from './types';

const version = getVersion();
const description = loadPackageJson('description') ?? '';
const name = loadPackageJson('name') ?? '';

const cli = new Cli<CommandContext>({
  binaryLabel: description,
  binaryName: `remirror`,
  binaryVersion: version,
});

cli.register(HelpCommand);
cli.register(VersionCommand);
cli.register(BundleCommand);

cli.runExit(process.argv.slice(2), {
  version,
  description,
  name,
  internal: false,
  cwd: process.cwd(),
  stdin: process.stdin,
  stdout: process.stdout,
  stderr: process.stderr,
});
