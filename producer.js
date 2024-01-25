const Pulsar = require("pulsar-client");

main().catch((err) => console.error(err));

async function main() {
  try {
    const client = new Pulsar.Client({
      serviceUrl: "pulsar://<your-pulsar-server-url>",
    });

    const producer = await client.createProducer({
      topic: "my-topic",
    });

    console.log("Producer created!");
    console.log("Sending messages...");

    for (let i = 0; i < 10; i++) {
      await producer.send({
        data: Buffer.from(`my-message-${i}`),
      });
    }

    console.log("Messages sent!");
    
    await producer.close();
    await client.close();
  } catch (err) {
    console.error(err);
  }
}
