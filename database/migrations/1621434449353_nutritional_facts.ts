import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class NutritionalFacts extends BaseSchema {
  protected tableName = 'NutritionalFacts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('idNutritionalFacts').primary()
      table.integer('idProduct').notNullable()
      table.integer('idIngredient').notNullable()
      table.double('amount').notNullable()
      table.string('serving').notNullable()
      table.double('dailyValue')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
