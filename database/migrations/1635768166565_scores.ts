import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Scores extends BaseSchema {
  protected tableName = 'Score'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('idScore').primary()
      table
      .integer('idProduct')
      .unsigned()
      .notNullable()
      .references('Product.idProduct')
      .onDelete('CASCADE')
      table.float('health')
      table.float('nutrients')
      table.float('environment')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
