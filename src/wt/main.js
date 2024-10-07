import { Worker } from "node:worker_threads";
import { cpus } from "node:os";
import { join } from "node:path";

const dirname = import.meta.dirname;
const targetPath = join(dirname, "worker.js");
const performCalculations = async () => {
  const cpuCoresNumber = cpus().length;

  const result = await Promise.all(
    Array.from({ length: cpuCoresNumber }).map(async (_, index) => {
      return new Promise((res) => {
        const data = index + 10;
        const worker = new Worker(targetPath, { workerData: data });
        let result;

        worker.on("message", (data) => {
          result = ({ status: "resolved", data });
        });

        worker.on("error", () => {
          result = ({ status: "error", data: null });
        });

        worker.on("exit", () => {
          res(result);
        });
      });
    })
  );


  console.log(result);

  // Write your code here
};

await performCalculations();

// main.js - implement function that creates number of worker threads
// (equal to the number of host machine logical CPU cores) from file worker.js
// and able to send data to those threads and to receive result of the computation from them.
// You should send incremental number starting from 10 to each worker.
// For example: on host machine with 4 cores you should create 4 workers and send 10 to first worker, 11 to second worker, 12 to third worker, 13 to fourth worker. After all workers will finish, function should log array of results into console.
// The results are array of objects with 2 properties:
// status - 'resolved' in case of successfully received value from worker or 'error' in case of error in worker
// data - value from worker in case of success or null in case of error in worker
// The results in the array must be in the same order that the workers were created
