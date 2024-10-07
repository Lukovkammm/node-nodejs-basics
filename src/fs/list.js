import { readdir } from 'node:fs/promises';
import path from 'node:path';

const dirname = import.meta.url;

const list = async () => {
    const targetPath = path.join(dirname, 'files');

    try {
        const files = await readdir(targetPath);
        for (const file of files) console.log(file);
    } catch (err) {
        console.error(err);
        throw new Error("FS operation failed");
    }
};

await list();

