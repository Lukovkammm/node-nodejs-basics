import { readdir, cp } from 'node:fs/promises';
import path from 'node:path';

const dirname = import.meta.dirname;

const copy = async () => {
    const sourcePath = path.join(dirname, 'files');
    const targetPath = path.join(dirname, 'files_copy');

    try {
        await readdir(sourcePath);
        await cp(sourcePath, targetPath, { errorOnExist: true, recursive: true, force: false });
    } catch (error) {
        console.log(error);
        throw new Error('FS operation failed');
    }
};

await copy();

