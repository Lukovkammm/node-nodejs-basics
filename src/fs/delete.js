import { promises as fs } from 'fs';
import path from 'path';
import { __dirname } from './paths.js';

const remove = async () => {
    const targetPath = path.join(__dirname, 'files/fileToRemove.txt')

    try {
        await fs.rm(targetPath)
    } catch (error) {
        throw Error('FS operation failed')
    }
};

await remove();
