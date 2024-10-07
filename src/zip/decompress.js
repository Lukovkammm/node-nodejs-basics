import path from "node:path";
import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import { createGunzip } from "node:zlib";

const dirname = import.meta.dirname;

const decompress = async () => {
  const sourcePath = path.join(dirname, "files", "archive.gz");
  const targetPath = path.join(dirname, "files", "fileToCompress.txt");
  const readStream = createReadStream(sourcePath);
  const writeStream = createWriteStream(targetPath);
  const gunzip = createGunzip();

  try {
    await pipeline(readStream, gunzip, writeStream);
  } catch (error) {
    throw new Error("Operation failed!");
  }
};

await decompress();

// decompress.js - implement function that decompresses archive.gz back to the fileToCompress.txt
// with same content as before compression using zlib and Streams API
