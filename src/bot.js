const TelegramBot = require('node-telegram-bot-api');

const webAppUrl = 'https://venerable-panda-19ca5a.netlify.app';

const token = '7481817295:AAHhcNRXfQ3pFrvoZI7z93TlBeFnwNn5biU';

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match && match[1];

  if (resp) {
    bot.sendMessage(chatId, resp);
  }
});

bot.on('message', async msg => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text) {
    await bot.sendMessage(chatId, 'Press button', {
      reply_markup: {
        inline_keyboard: [[{ text: 'Press', web_app: { url: webAppUrl } }]],
      },
    });
  }
});
