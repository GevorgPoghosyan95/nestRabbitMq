import {IsDate, IsEnum, IsInt, IsNumber} from "class-validator";
import {Type} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export enum OrderStatus {
    PENDING = 'PENDING',
    PAID = 'PAID',
    PROCESSING = 'PROCESSING',
    COMPLETED = 'COMPLETED',
    CANCELLED = 'CANCELLED',
}


export class CreateOrderDTO {

    @ApiProperty()
    @IsNumber()
    order_no: number;

    @ApiProperty()
    @IsInt()
    region_id: number;

    @ApiProperty()
    @IsInt()
    customer_id?: number;

    @ApiProperty()
    @IsInt()
    total_price: number;

    @ApiProperty({ required: false, enum: Object.values(OrderStatus) })
    @IsEnum(OrderStatus,{ message: `Allowed ${JSON.stringify(Object.values(OrderStatus))}` })
    status: OrderStatus;

}

