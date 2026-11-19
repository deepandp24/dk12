import { execSync } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';

const dist = path.resolve('dist');
const env = { 
  ...process.env, 
  PATH: 'C:\\Users\\deepa\\.gemini\\antigravity\\mingit\\cmd;C:\\Users\\deepa\\.gemini\\antigravity\\mingit\\ucrt64\\bin;' + process.env.PATH 
};

console.log('Ensuring dist is fresh...');
execSync('npm run build', { env, stdio: 'inherit' });

console.log('Deploying dist directly to origin/gh-pages...');
execSync('git init', { cwd: dist, env });
execSync('git config user.name deepandp24', { cwd: dist, env });
execSync('git config user.email deepandd003@gmail.com', { cwd: dist, env });
execSync('git config http.sslBackend schannel', { cwd: dist, env });
execSync('git add -A', { cwd: dist, env });
execSync('git commit -m "Deploy site to gh-pages"', { cwd: dist, env });
execSync('git push https://github.com/deepandp24/dk12.git HEAD:gh-pages --force', { cwd: dist, env, stdio: 'inherit' });

// Remove the temp .git inside dist so it stays clean
try {
  fs.rmSync(path.join(dist, '.git'), { recursive: true, force: true });
} catch (e) {}

console.log('🎉 Successfully deployed to gh-pages branch!');
