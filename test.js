const line = require('@line/bot-sdk');

const client = new line.Client({
  channelAccessToken: '_________ChannelAccessToken_________'
});

const message = {
  type: 'text',
  text: 'Hello World!'
};

client.pushMessage('________UserID__________', message)
  .then(() => {
    console.log("done.");
  })
  .catch((err) => {
    // error handling
  });