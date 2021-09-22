import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class FolderFavorites extends BaseSchema {
  protected tableName = 'FolderProduct'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('idFolderProduct').primary()
      table
      .integer('idFolder')
      .unsigned()
      .notNullable()
      .references('Folder.idFolder')
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
