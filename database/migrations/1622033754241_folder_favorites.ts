import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class FolderFavorites extends BaseSchema {
  protected tableName = 'FolderFavourite'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('idFolderFavourite').primary()
      table
      .integer('idFolder')
      .unsigned()
      .notNullable()
      .references('Folder.idFolder')
      .onDelete('CASCADE')
      table
      .integer('idFavourite')
      .unsigned()
      .notNullable()
      .references('Favourite.idFavourite')
      .onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
