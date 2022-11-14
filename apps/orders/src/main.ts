import { OrderModule } from './order.module';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  try{
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(
        OrderModule,
        {
          transport: Transport.RMQ,
          options: {
            urls: ['amqp://rabbitmq:5672'],
            queue: 'orders_queue',
            queueOptions: {
              durable: false,
            },
          },
        },
    );
      await app.listen();
  }catch (e) {
    console.log(e);
  }

}

bootstrap();
