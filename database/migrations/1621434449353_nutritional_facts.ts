import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class NutritionalFacts extends BaseSchema {
  protected tableName = 'NutritionalFacts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('idNutritionalFacts').primary()
      table
      .integer('idProduct')
      .unsigned()
      .notNullable()
      .references('Product.idProduct')
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
