import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Products extends BaseSchema {
  protected tableName = 'Product'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('idProduct').primary()
      table.string('name').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
