import {Body, Controller, Get, HttpStatus, Inject, Injectable, Post} from '@nestjs/common';
import { Observable } from 'rxjs';
import {ClientProxy} from "@nestjs/microservices";
import {CreateOrderDTO} from "./dtos/create_order_dto";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";


@ApiTags('Order')
@Injectable()
@Controller('orders')

export class OrderController {
  constructor(@Inject('ORDER-SERVICE') private orderClient: ClientProxy) {}

  @Get()
  getOrders(): Observable<any> {
    return this.orderClient.send({ cmd: 'get-orders' }, JSON.stringify({}));
  }


  @ApiOperation({ summary: 'Create order.' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The record successfully created.',
    type: CreateOrderDTO,
  })
  @Post()
  createOrder(@Body() createCatDto: CreateOrderDTO): Observable<any> {
    return this.orderClient.send({ cmd: 'create-order' }, JSON.stringify(createCatDto));
  }
}
