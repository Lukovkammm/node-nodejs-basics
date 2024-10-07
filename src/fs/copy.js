import { promises as fs } from 'fs';
import path from 'path';
import { __dirname } from './paths.js';

const copy = async () => {
    const sourcePath = path.join(__dirname, 'files');
    const targetPath = path.join(__dirname, 'files_copy');

    try {
        const files = await fs.readdir(targetPath);
        if (files.length) throw Error();
    } catch (error) {
        if (error.code !== 'ENOENT') {
            console.log(error);
            throw Error('FS operation failed');
        }
    }

    try {
        await fs.cp(sourcePath, targetPath, { errorOnExist: true, recursive: true });
    } catch (error) {
        console.log(error);
        throw Error('FS operation failed');

    }
};

await copy();

