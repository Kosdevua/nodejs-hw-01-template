import path from 'node:path';

console.log(process.cwd());

export const PATH_DB = path.join(process.cwd(), 'src', 'db', 'db.json');
