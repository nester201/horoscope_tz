const TelegramBot = require('node-telegram-bot-api');

const token = '7481817295:AAHhcNRXfQ3pFrvoZI7z93TlBeFnwNn5biU';

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match && match[1];

  if (resp) {
    bot.sendMessage(chatId, resp);
  }
});

bot.on('message', msg => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Received your message');
});
