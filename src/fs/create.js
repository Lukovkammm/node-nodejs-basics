import { promises as fs } from 'fs';
import path from 'path';
import { __dirname } from './paths.js';

const create = async () => {
    const filePath = path.join(__dirname, 'files/fresh.txt');
    const content = 'I am fresh and young';

    try {
        await fs.writeFile(filePath, content, { flag: 'wx', encoding: 'utf8' });
    } catch (err) {
        throw Error('FS operation failed')
    }
};

await create();