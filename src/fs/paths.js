import path from 'path';
import url from 'url';

const fileName = url.fileURLToPath(import.meta.url);
export const __dirname = path.dirname(fileName);

