import path from "node:path";
import { pipeline } from "node:stream/promises";
import { createReadStream, createWriteStream } from "node:fs";
import { createGzip } from "node:zlib";

const dirname = import.meta.dirname;

const compress = async () => {
  const sourcePath = path.join(dirname, "files", "fileToCompress.txt");
  const targetPath = path.join(dirname, "files", "archive.gz");
  const readStream = createReadStream(sourcePath);
  const writeStream = createWriteStream(targetPath);
  const gzip = createGzip();

  try {
    await pipeline(readStream, gzip, writeStream);
  } catch (error) {
    throw new Error("Operation failed!");
  }
};

await compress();

// compress.js - implement function that compresses file fileToCompress.txt to archive.gz using zlib and Streams API
