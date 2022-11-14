import {Module, OnModuleInit} from '@nestjs/common';
import { OrderController } from './controllers/order.controller';
import { OrderService } from './services/order.service';
import { ConfigModule } from '@nestjs/config';
import {TypeOrmModule, TypeOrmModuleOptions} from "@nestjs/typeorm";
import {OrderEntity} from "./entity/order";
import {knex} from 'knex';

// Local Modules
import database from './config/database';

const entities = [
  OrderEntity
]

const connectOptions: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities,
};

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot(connectOptions),
    TypeOrmModule.forFeature(entities),
  ],
  controllers: [OrderController],
  providers: [OrderService],
})

export class OrderModule implements OnModuleInit {
  async onModuleInit() {
    await knex(database).migrate.latest()
  }
}
