import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Favorites extends BaseSchema {
  protected tableName = 'Favorite'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('idFavorite').primary()
      table.integer('idProduct').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
