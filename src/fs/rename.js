import { promises as fs } from "fs";
import path from 'path';
import { __dirname } from './paths.js';

const rename = async () => {
    const sourcePath = path.join(__dirname, "files/wrongFilename.txt");
    const targetPath = path.join(__dirname, "files/properFilename.md");

    try {
        const targetStat = await fs.stat(targetPath);
        if (targetStat) throw Error();
    } catch (error) {
        if (error.code !== "ENOENT") {
            throw Error("FS operation failed");
        }
    }

    try {
        await fs.rename(sourcePath, targetPath);
    } catch (error) {
        throw Error("FS operation failed");
    }
};

await rename();