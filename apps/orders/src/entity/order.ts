import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

export enum OrderStatus {
    PENDING = 'PENDING',
    PAID = 'PAID',
    PROCESSING = 'PROCESSING',
    COMPLETED = 'COMPLETED',
    CANCELLED = 'CANCELLED',
}

@Entity('orders')
export class OrderEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('integer', {unique: true})
    order_no: number;

    @Column('integer')
    region_id: number;

    @Column('integer', {nullable: true})
    customer_id?: number;

    @Column({type: 'decimal', precision: 6, scale: 2})
    total_price: number;

    @Column('varchar', {length: 300})
    status: OrderStatus;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}