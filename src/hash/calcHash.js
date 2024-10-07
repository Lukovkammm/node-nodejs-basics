import { join } from 'node:path';
import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';
import { pipeline } from 'node:stream/promises';

const dirname = import.meta.dirname;

const calculateHash = async () => {
    const targetPath = join(dirname, 'files', 'fileToCalculateHashFor.txt');
    const readStream = createReadStream(targetPath);
    const hash = createHash('sha256').setEncoding('hex');

    // this approach doesn't do anything in terminal, why ??
    try {
        await pipeline(
            readStream,
            hash,
            process.stdout
        );
        console.log('Done!');
    } catch (error) {
        throw new Error(error);
    }

    // this approach is working fine!
    // readStream.on("data", (chunk) => hash.update(chunk));

    // readStream.on("end", () => {
    //     const result = hash.digest("hex");
    //     console.log(result);
    // });
};

await calculateHash();

