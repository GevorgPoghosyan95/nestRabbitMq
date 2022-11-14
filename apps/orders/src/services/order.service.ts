import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {OrderEntity} from "../entity/order";
import {Repository} from "typeorm";

@Injectable()
export class OrderService {
  constructor(
      @InjectRepository(OrderEntity)
      private orderRepository: Repository<OrderEntity>
  ) {}


  async getOrders(): Promise<OrderEntity[]> {
    const orders = await this.orderRepository.find();
    return orders;
  }

  async createOrder(orderData:OrderEntity): Promise<OrderEntity> {
    const order = await this.orderRepository.save(orderData);
    return order;
  }
}
