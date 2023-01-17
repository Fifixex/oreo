import axios from 'axios';
import { Client, GatewayIntentBits  } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const api = 'https://discord.com/api/v9';

const checkBot = async token => {
  try {
    await client.login(token);
    return client.user;
  } catch (err) {
    return {
      isBot: false,
      isValid: false,
      error: err
    }
  }
}

export const checker = async token => {
  try {
    let res = await new axios({
      url: `${api}/users/@me`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: token
      }
    });
    
    if(res.status === 200) return {
      isValid: true,
      isBot: false,
      data: res.data
    };
  } catch ({ response }) {
    let data = await checkBot(token);
    if(data) return {
      isBot: true,
      isValid: true,
      data: client.user
    }
    return {
      isValid: false,
      isBot: false,
      error: response.data.message || response.statusText
    };
  }
}
