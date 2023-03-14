import crypto from 'crypto'
import fs from 'fs'

const GMAIL = 'javohir.dev.19@gmail.com';
const finalHexes = [];

const fileNames = fs.readdirSync('./data/');
for(const fName of fileNames) {
    const fileBuf = fs.readFileSync(`./data/${fName}`);
    const hash = crypto.createHash("SHA3-256")
    const finalHex = hash.update(fileBuf).digest("hex");
    finalHexes.push(finalHex);
}

const sortedAndJoined = finalHexes.sort().join("") + GMAIL.toLocaleLowerCase();