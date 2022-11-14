import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { getRabbitMQClientOptions } from '../../../../utils/rabbitMQ.utils';
import {OrderController} from "./order.controller";

@Module({
  imports: [
    ClientsModule.register([
      getRabbitMQClientOptions('ORDER-SERVICE', 'orders_queue', false),
    ]),
  ],
  controllers: [OrderController],
  providers: [],
})
export class OrderModule {}
