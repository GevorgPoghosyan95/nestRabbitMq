import { ClientProviderOptions, Transport } from '@nestjs/microservices';

export function getRabbitMQClientOptions(
  name: string,
  queue: string,
  noAck = false,
): ClientProviderOptions {
  return {
    name: name,
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://rabbitmq:5672'],
      queue: queue,
      queueOptions: {
        durable: false,
      },
      noAck,
    },
  };
}
