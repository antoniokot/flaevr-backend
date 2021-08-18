import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class NutrientNutritionalFacts extends BaseSchema {
  protected tableName = 'NutrientNutritionalFacts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('idNutrientNutritionalFacts')
      table
      .integer('idNutrient')
      .unsigned()
      .notNullable()
      .references('Nutrient.idNutrient')
      .onDelete('CASCADE')
      table
      .integer('idNutritionalFacts')
      .unsigned()
      .notNullable()
      .references('NutritionalFacts.idNutritionalFacts')
      .onDelete('CASCADE')
      table.string('value').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
