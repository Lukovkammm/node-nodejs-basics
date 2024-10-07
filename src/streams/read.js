import { join } from "node:path";
import { createReadStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import { stdout } from "node:process";

const dirname = import.meta.dirname;

const read = async () => {
  console.log(dirname);
  const targetPath = join(dirname, "files", "fileToRead.txt");
  const readStream = createReadStream(targetPath, { encoding: "utf-8" });

  try {
    await pipeline(readStream, stdout);
    console.log("Reading completed!");
  } catch (err) {
    console.log(err);
  }
};

await read();

// read.js - implement function that reads file fileToRead.txt content
// using Readable Stream and prints it's content into process.stdout

// const stream = createReadStream(targetPath);
// stream.pipe(stdout);
// stream.on('end', () => {
//     console.log('\nFile reading complete!')
// })

// Write your code here
