import { Kafka } from "kafkajs";

const kafka = new Kafka({
    clientId : 'employee-service',
    brokers: ['localhost:9092']
});

const producer = kafka.producer();

const publish = async() =>{
    await producer.connect().catch((e) => console.error(e))
    for(let i=0;i<100;i++){
        await producer.send({
            topic: 'employee-topic',
            messages: [{key: i.toString(), value: JSON.stringify({empName:'Akalanka '+i})}]
        })
    }
}
publish().catch((e)=>console.log(e));