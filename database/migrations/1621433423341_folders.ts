import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Folders extends BaseSchema {
  protected tableName = 'Folder'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('idFolder').primary()
      table.string('name').notNullable()
      table.integer('idUser').notNullable()
      table.integer('idFavorite').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
