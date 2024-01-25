const Pulsar = require("pulsar-client");

main().catch((err) => console.error(err));

async function main() {
  const client = new Pulsar.Client({
    serviceUrl: "pulsar://<your-pulsar-server-url>",
  });
  const consumer = await client.subscribe({
    topic: "my-topic",
    subscription: "my-subscription",
  });

  // CAREFUL!: This will run forever unless you stop it
  while (true) {
    const msg = await consumer.receive();
    console.log(`Received message "${msg.getData()}"`);
  }
  
  await consumer.close();
  await client.close();
}
