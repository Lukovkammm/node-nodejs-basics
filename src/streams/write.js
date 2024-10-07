import { createWriteStream } from "node:fs";
import path from "node:path";
import { pipeline } from "node:stream/promises";

const dirname = import.meta.dirname;

const write = async () => {
  const targetPath = path.join(dirname, "files", "fileToWrite.txt");
  const stream = createWriteStream(targetPath);

  try {
    await pipeline(process.stdin, stream);
  } catch (error) {
    throw new Error("Operation failed!");
  }
};

await write();
