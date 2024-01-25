# Apache Pulsar Demo Client

This is a super simple Node.js client to test out an Apache Pulsar install. It creates a producer that will send 10 test messages, and a consumer that will listen for incoming messages.

## How to use

Replace ```<your-pulsar-server-url>``` in both ```consumer.js``` and ```producer.js```.

1. ```npm i```
2. ```npm run start-consumer```
3. In a seperate terminal: ```npm run start-producer```
4. Watch for the messages to come in!