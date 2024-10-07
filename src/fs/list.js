import { readdir } from "fs/promises";
import path from "path";
import { __dirname } from "./paths.js";

const list = async () => {
    const targetPath = path.join(__dirname, "files");

    try {
        const files = await readdir(targetPath);
        for (const file of files) console.log(file);
    } catch (err) {
        console.error(err);
        throw Error("FS operation failed");
    }
};

await list();

