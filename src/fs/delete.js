import { rm } from 'node:fs/promises';
import path from 'node:path';

const dirname = import.meta.dirname;

const remove = async () => {
    const targetPath = path.join(dirname, 'files', 'fileToRemove.txt');

    try {
        await rm(targetPath); // *can be used unlink
    } catch (error) {
        throw new Error('FS operation failed')
    }
};

await remove();
