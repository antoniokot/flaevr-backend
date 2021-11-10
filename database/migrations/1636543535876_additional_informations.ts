import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AdditionalInformations extends BaseSchema {
  protected tableName = 'AdditionalInformation'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('idAdditionalInformation').primary()
      table
      .integer('idUser')
      .unsigned()
      .notNullable()
      .references('User.idUser')
      .onDelete('CASCADE')
      table.integer('age')
      table.string('gender')
      table.integer('af')
      table.float('height')
      table.integer('weight')
      table.integer('idealWeight')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
