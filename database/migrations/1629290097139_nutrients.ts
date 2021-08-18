import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Nutrients extends BaseSchema {
  protected tableName = 'Nutrient'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('idNutrient')
      table.string('name').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
