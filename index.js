const mqtt = require('mqtt')


const client = mqtt.connect('mqtt://127.0.0.1:1883');

const topic = 'coleta';
const message = {type: "coleta", message: "1"};

client.on('connect', () => {
    console.log(`Is client connected: ${client.connected}`);    
    if (client.connected === true) {
        console.log(`message: ${message}, topic: ${topic}`); 
        client.publish(topic, JSON.stringify(message));
        client.subscribe("response");
    }
});

client.on('message',(topic, message) => {
    console.log(`message: ${message}, topic: ${topic}`); 
});

client.on('error',(error) => {
    console.error(error);
    process.exit(1);
});