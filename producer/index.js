const { Kafka } = require('kafkajs')
 
const kafka = new Kafka({
  clientId: 'publish-subscribe',
  brokers: [ '127.0.0.1:9092' ]
})
 
const producer = kafka.producer()
 
const run = async () => {
    let message = {
        status: 'Mensagem recebida 3',
        createdAt: new Date()
    }

    await producer.connect()
    await producer.send({
        topic: 'chat',
        messages: [{ value: JSON.stringify(message) }],
    })

}
 
run().catch(console.error)