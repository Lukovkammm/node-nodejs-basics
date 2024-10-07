import { readFile } from 'node:fs/promises';
import path from 'node:path';

const dirname = import.meta.dirname;

const read = async () => {
    const targetPath = path.join(dirname, 'files', 'fileToRead.txt');
    try {
        const content = await readFile(targetPath, { encoding: 'utf-8' });
        console.log(content);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await read();
