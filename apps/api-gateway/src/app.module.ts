import { Module } from '@nestjs/common';
import {OrderModule} from "./order-service/order.module";

@Module({
  imports: [
      OrderModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
