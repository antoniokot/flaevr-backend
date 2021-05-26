import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Scanneds extends BaseSchema {
  protected tableName = 'Scanned'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('idScanned').primary()
      table
      .integer('idUser')
      .unsigned()
      .notNullable()
      .references('User.idUser')
      .onDelete('CASCADE')
      table
      .integer('idProduct')
      .unsigned()
      .notNullable()
      .references('Product.idProduct')
      .onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
