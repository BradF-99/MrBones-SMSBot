# MrBones-SMSBot
A simple Express app that sends Mr Bones responses to requests from the Twilio Programmable SMS API.

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
4. Set an environment variable called `MRBONESAPIURL` and set the value as the URL to the Mr Bones API.
5. Start the app by running `npm start` or `./bin/www`.
6. Point the Webhook URL of your Twilio SMS number at `http://[your-server-url]:3000/bones`. Make sure the type is set to **HTTP POST**.
7. Set the "Primary Handler Fails" URL of your Twilio SMS number to `http://[your-server-url]:3000/error`. Make sure the type is set to **HTTP POST**.
8. Try sending a text message to your SMS number.