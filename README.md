# server-deployment-practice
HTTP Express server

Deployment URL Dev: https://milsap-server-deploy-dev.herokuapp.com/
Deployment URL Prod: https://milsap-server-deploy-prod.herokuapp.com/


![Data Flow](/UML.png)

## Installation

to install run `git clone https://github.com/MikeKuhl/server-deployment-practice.git`

`cd` server-deployment-practice

run `npm install`

## Usage

To start server run : `npm start`

To test server run: `npm test`

## Routes

* GET `/message`: returns a list of Message objects
* POST `/message`: creates a message, saves it and returns the list of messages.

## Features

* Message:
  * Contains String: Text
  * Contains String: Author
  * Messages can be saves
  * Full list of messages read.