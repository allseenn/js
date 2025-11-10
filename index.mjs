//import dotenv from 'dotenv';
//console.log(dotenv.config().parsed);
// env-loader.js
const env = typeof window === 'undefined' 
  ? (await import('dotenv')).default.config().parsed
  : await (async () => {
      const response = await fetch('.env');
      const text = await response.text();
      return Object.fromEntries(text.split('\n').map(line => line.split('=')));
    })();

console.log(env);

