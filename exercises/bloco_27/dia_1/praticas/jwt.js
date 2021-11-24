/* 
- header
{
  "alg": "HS256",
  "typ": "JWT"
}

- payload
{
  "sub": 1234567890,
  "name": "Teste da Silva",
  "admin": true
}

- signature
header + payload
*/

// código exemplo

import { hmac } from 'biblioetecaDeHmac';

function base64(string) {
  return Buffer.from(string).toString('base64');
}

const header = JSON.stringfy({ alg: 'HS256', typ: 'JWT' });
const payload = JSON.stringfy({ sub: 1234567890, name: 'Teste da Silva', admin: true });

const secret = 'senhaAltamenteComplexa123';

const signature = hmac(`${base64(header)}.${base64(payload)}`, secret);

const token = `${base64(header)}.${base64(payload)}.${base64(signature)}`;