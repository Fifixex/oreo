import { appendFileSync } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const path = `${__dirname}/../data`;

export const saveToken = (isBot, id, token) => {
  let file = isBot ? 'bots' : 'users';
  appendFileSync(`${path}/${file}.txt`, `\nID: ${id}\n${token}\n`, (err) => {
    if (err) return console.log(err);
  })
}