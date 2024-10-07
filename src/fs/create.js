import { writeFile } from 'node:fs/promises';
import path from 'node:path';

const dirname = import.meta.dirname;

const create = async () => {
    const filePath = path.join(dirname, 'files', 'fresh.txt');
    const content = 'I am fresh and young';

    try {
        await writeFile(filePath, content, { flag: 'wx', encoding: 'utf8' });
    } catch (err) {
        throw new Error('FS operation failed')
    }
};

await create();