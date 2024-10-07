import { pipeline } from "node:stream/promises";
import { Transform } from "node:stream";

const transform = async () => {
  const reverseTransform = new Transform({
    transform(chunk, encoding, callback) {
      try {
        const transformedChunk = chunk.toString().split("").reverse().join("");
        callback(null, transformedChunk);
      } catch (err) {
        callback(err);
      }
    },
  });

  try {
    await pipeline(process.stdin, reverseTransform, process.stdout);
  } catch (error) {}
  throw new Error("Operation failed!");
};

await transform();
