import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema
        .createTable('orders', (table) => {
            table.increments('id').primary();
            table.integer('order_no').notNullable().unique();
            table.integer('region_id').notNullable();
            table.integer('customer_id');
            table.decimal('total_price', 6, 2).notNullable();
            table.string('status', 300).notNullable();
            table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
            table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
        })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema
        .dropTableIfExists('orders')
}

