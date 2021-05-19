import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Ingredients extends BaseSchema {
  protected tableName = 'Ingredient'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('idIngredient').primary()
      table.string('name').notNullable()
      table.integer('isAllergenic').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
