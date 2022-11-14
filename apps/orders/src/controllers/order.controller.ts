import { Controller } from '@nestjs/common';
import { OrderService } from '../services/order.service';
import { MessagePattern } from '@nestjs/microservices';
import {OrderEntity} from "../entity/order";

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @MessagePattern({ cmd: 'get-orders' })
  async getOrders(data: string): Promise<OrderEntity[]> {
    const services = await this.orderService.getOrders()
    return services;
  }


  @MessagePattern({ cmd: 'create-order' })
  async createOrder(data: string): Promise<OrderEntity> {
    const orderData = JSON.parse(data);
    const order = await this.orderService.createOrder(orderData)
    return order;
  }


}
