import { checker } from '../services/check';
import { saveToken } from '../services/save';

export const postCheckToken = async (req, res) => {
  let { tokens } = req.body;
  let valids = 0;
  let errors = [];
  
  if (!tokens) return res.json({ error: 'Error data params!' });
  let promises = await tokens.map(async (token) => {
    let { isValid, isBot, data, error } = await checker(token);
    if(isValid) {
      valids++;
      console.log(`${data.id}\n${token}`)
      saveToken(isBot, data.id, token);
    }
    else errors.push(error);
  });
  await Promise.all(promises);
  if(errors > valids) return res.json({ errors });
  res.json({
    length: valids,
    msg: `All tokens have been checked`
  });
}

export const getTokensUsers = (req, res) => {
  try {
    res.json({ msg: 'uwu' });
  } catch (err) {
    return res.status(404).json({ error: 'No users tokens found!' });
  }
}

export const getTokensBots = (req, res) => {
  try {
    res.json({ msg: 'uwu' });
  } catch (err) {
    return res.status(404).json({ error: 'No bots tokens found!' });
  }
}