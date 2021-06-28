import axios from 'axios';
import md5 from 'js-md5';

const timestamp = Number(new Date());

const publick_key = "c04b58f6f79a46fca2174d79f512b1cc";
//process.env.PUBLICK_KEY;

const private_key = "a744cb2711a1facdddca11447190e8fe80f9c7d9";
//process.env.PRIVATE_KEY;

// create hash
const hash_hero = md5.create();

hash_hero.update(timestamp + private_key + publick_key);

const api = axios.create({
  baseURL: `
  https://gateway.marvel.com/v1/public/comics?ts=${timestamp}&apikey=${publick_key}&hash=${hash_hero.hex()}
`})

export default api;