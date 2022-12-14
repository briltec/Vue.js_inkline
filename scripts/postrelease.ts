import shell from 'shelljs';
import path from 'path';

/**
 * Change directory to root
 */

shell.cd(path.resolve(__dirname, '..'));

/**
 * Remove build files
 */

shell.rm('-R', ['./lib', './dist']);
