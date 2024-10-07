import { rename } from 'node:fs/promises';
import path from 'node:path';

const dirname = import.meta.dirname;
const rename = async () => {
    const sourcePath = path.join(dirname, 'files', 'wrongFilename.txt');
    const targetPath = path.join(dirname, 'files', 'properFilename.md');

    try {
        await rename(sourcePath, targetPath);
    } catch (error) {
        throw new Error("FS operation failed");
    }
};

await rename();