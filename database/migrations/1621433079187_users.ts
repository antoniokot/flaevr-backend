import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'User'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('idUser').primary()
      table.string('name').notNullable()
      table.string('password').notNullable()
      table.string('email').unique().notNullable()
      table.string('pictureFileName')
      table.binary('pictureData')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
