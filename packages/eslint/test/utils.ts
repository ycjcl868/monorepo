import { expect } from 'vitest'
import * as childProcess from 'child_process'
import * as path from 'path'

const EXECUTABLE_PATH = require.resolve('eslint/bin/eslint')

export function awaitExit(exitingProcess) {
  return new Promise((resolve) => exitingProcess.once('exit', resolve))
}

export function assertExitCode(exitingProcess, expectedExitCode) {
  return awaitExit(exitingProcess).then((exitCode) => {
    expect(exitCode, expectedExitCode).toStrictEqual(expectedExitCode)
  })
}

export const forkedProcesses = new Set<childProcess.ChildProcess>()
export function runESLint(args, options, eslintConfig) {
  if (!eslintConfig) {
    throw new Error('No eslint config')
  }
  const realArgs = ['-c', eslintConfig, '--no-color', '--no-ignore', ...args]
  console.log(`${EXECUTABLE_PATH} ${realArgs.join(' ')}`)
  // console.log('realArgs', realArgs);
  const newProcess = childProcess.fork(
    EXECUTABLE_PATH,
    realArgs,
    Object.assign({ silent: true }, options)
  )

  forkedProcesses.add(newProcess)
  return newProcess
}

export function getOutput(runningProcess: childProcess.ChildProcess) {
  let stdout = ''
  let stderr = ''

  runningProcess.stdout.on('data', (data) => (stdout += data))
  runningProcess.stderr.on('data', (data) => (stderr += data))
  return awaitExit(runningProcess).then(() => ({ stdout, stderr }))
}
