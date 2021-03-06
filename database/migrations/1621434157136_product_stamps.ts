import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ProductStamps extends BaseSchema {
  protected tableName = 'ProductStamp'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('idProductStamp').primary()
      table
      .integer('idProduct')
      .unsigned()
      .notNullable()
      .references('Product.idProduct')
      .onDelete('CASCADE')
      table
      .integer('idStamp')
      .unsigned()
      .notNullable()
      .references('Stamp.idStamp')
      .onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
