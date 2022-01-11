'use strict';

const express = require('express');

// express() -> singleton pattern, returns an object that can be modified
const app = express();

const messages = [];
class Message {
  constructor(text, author) {
    this.text = text;
    this.author = author;
  }
}

// this method / function modifies our app singleton.
app.get('/message', (request, response) => {
  console.log('Somone sent a request!: ' + request.method);

  response.send(messages);
});

function createMessage(req, res, next) {
  const messageText = req.query.text;
  const authorName = req.query.author;

  console.log('First message is created!');

  if (!messageText || !authorName) {
    next('No text or author');
  } else {
    const message = new Message(messageText, authorName);

    // we modify,
    req.message = message;
    next();
  }
}

function saveMessage(req, res, next) {
  console.log('We can see any data that was added to the request', req.message);
  let message = req.message;
  messages.push(message);
  next();
}

// POST -> http://localhost:3000/message?text=SomeString&author=Jacob
app.post('/message', createMessage, saveMessage, (request, response, next) => {
  // create a message and send it back?
  response.send(messages);
});

app.use(function (err, request, response, next) {
  console.log(err);
  response.send('Error handler hit!');
});

// only runs when no other function can from the handlers above
app.use(function (request, response) {
  response.status(404).send('***** Nothing found *****');
});

module.exports = {
  start: function (port) {
    app.listen(port, () => {
      console.log('App is running on : ' + port);
    });
  },
  app,
};
