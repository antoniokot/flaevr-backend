import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Stamps extends BaseSchema {
  protected tableName = 'Stamp'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('idStamp').primary()
      table.string('name').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
