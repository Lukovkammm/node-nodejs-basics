import { spawn } from "node:child_process";
import { join } from "node:path";
import process, { stdout } from "node:process";

const dirname = import.meta.dirname;
const targetPath = join(dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
  const childProcess = spawn("node", [targetPath, ...args]);

  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);

  childProcess.on("error", () => {
    throw new Error("Operation failed!");
  });

  // Write your code here
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["someArgument1", "someArgument2", 1, 2]);

// cp.js - implement function spawnChildProcess that receives array of arguments
// args and creates child process from file script.js, passing these args to it.
// This function should create IPC-channel between stdin and stdout of master process and child process:
// child process stdin should receive input from master process stdin
// child process stdout should send data to master process stdout
