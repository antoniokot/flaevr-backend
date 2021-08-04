import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class NutritionalFactsIngredients extends BaseSchema {
  protected tableName = 'NutritionalFactsIngredient'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('idNutritionalFactsIngredient').primary()
      table
      .integer('idNutritionalFacts')
      .unsigned()
      .notNullable()
      .references('NutritionalFacts.idNutritionalFacts')
      .onDelete('CASCADE')
      table
      .integer('idIngredient')
      .unsigned()
      .notNullable()
      .references('Ingredient.idIngredient')
      .onDelete('CASCADE')
      table.double('amount').notNullable()
      table.string('serving').notNullable()
      table.double('dailyValue')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
