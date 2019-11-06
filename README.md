# MrBones-SMSBot
A simple Express app that sends Mr Bones responses to requests from the Twilio Programmable SMS API.

## What is Mr Bones?
Mr Bones is a charming, semi-sentient chat bot that primarily is used on Discord, but has appeared elsewhere - such as this text message "hot-line".

## Requirements
* Node 10+ and NPM 6+ (for package installation)
* Twilio account with SMS number enabled
* A copy of (or link to) the Mr Bones API.

## Main Dependencies
* Express 4.16
* Twilio Node.js API 3.37
* Axios 0.19

GitHub generates a full list of dependencies which can be found [here](https://github.com/BradF-99/MrBones-SMSBot/network/dependencies).

## Installation 
1. Make sure you have satisfied the pre-requisites (mainly, having every requirement fulfilled above).
2. Clone the repository to your machine.
3. Run `npm install` to download the required dependencies.
4. Set an environment variable named `MRBONESAPIURL` and set the value as the URL to the Mr Bones API.  
(Optional: Make another environment variable named `PORT` and set that to the port you wish to use the app on. By default, the port is 26637.)  
5. Start the app by running `npm start` or `./bin/www`.
6. Point the Webhook URL of your Twilio SMS number at `http://[your-server-url]:[port]/bones`. Make sure the type is set to **HTTP POST**. By default, the port is 26637.
7. Set the "Primary Handler Fails" URL of your Twilio SMS number to `http://[your-server-url]:[port]/error`. Make sure the type is set to **HTTP POST**. Again, the port is 26637 with default settings.
8. Try sending a text message to your SMS number. You should receive a response in approximately 15 seconds.

![A screenshot of a conversation with Mr Bones.](https://i.imgur.com/1gjbqgp.jpg)