import { expect, describe, test, afterEach } from 'vitest';
import * as fs from 'fs';
import { globSync } from 'glob';
import * as path from 'path';

import { forkedProcesses, assertExitCode, getOutput, runESLint } from './utils';

// test cases
const fixturesPath = path.join(__dirname, 'fixtures');
const fixtures = fs.readdirSync(fixturesPath).map(fixture => {
  const badStdoutPath = path.join(fixturesPath, fixture, 'bad-stdout');
  const [goodPath] = globSync('good?(.js|.ts|.jsx|.tsx)', {
    absolute: true,
    cwd: path.join(fixturesPath, fixture),
  });
  const [badPath] = globSync('bad?(.js|.ts|.jsx|.tsx)', {
    absolute: true,
    cwd: path.join(fixturesPath, fixture),
  });

  return {
    ruleName: fixture,
    fixtures: [
      { name: 'good', fixture: goodPath },
      {
        name: 'bad',
        fixture: badPath,
        expectMsg: fs.existsSync(badStdoutPath)
          ? fs.readFileSync(badStdoutPath, 'utf-8').replace(/\n+$/, '').trim()
          : '',
      },
    ],
  };
});

afterEach(() => {
  // Clean up all the processes after every test.
  forkedProcesses.forEach(child => child?.kill());
  forkedProcesses.clear();
});

describe.each(fixtures)('eslint react($ruleName)', ({ ruleName, fixtures }) => {
  test.each(fixtures)(`$name`, async ({ name, fixture, expectMsg }) => {
    if (!fs.existsSync(fixture)) {
      return;
    }

    const configPath = path.join(fixturesPath, ruleName, 'config.js');
    const config = fs.existsSync(configPath) ? configPath : path.join(__dirname, '../react.js');
    const child = runESLint([fixture], {}, path.resolve(config));
    if (name === 'good') {
      await assertExitCode(child, 0);
    }

    if (name === 'bad') {
      await Promise.all([
        assertExitCode(child, 1),
        getOutput(child).then(({ stdout }) => {
          expect(expectMsg).not.toEqual('');
          expectMsg.split('\n').forEach(expectMsg => {
            expect(stdout).toMatch(expectMsg);
          });
        }),
      ]);
    }
  });
});
