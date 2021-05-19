import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ProductStamps extends BaseSchema {
  protected tableName = 'ProductStamp'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('idProductStamp').primary()
      table.integer('idProduct').notNullable()
      table.integer('idStamp').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
