import { readFile } from 'fs/promises';
import path from 'path';
import { __dirname } from './paths.js';

const read = async () => {
    const targetPath = path.join(__dirname, 'files/fileToRead.txt');
    try {
        const content = await readFile(targetPath, { encoding: 'utf-8' });
        console.log(content);
    } catch (error) {
        throw Error('FS operation failed');
    }
};

await read();
