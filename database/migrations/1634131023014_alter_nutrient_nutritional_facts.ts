import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AlterNutrientNutritionalFacts extends BaseSchema {
  protected tableName = 'NutrientNutritionalFacts'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('dailyValue')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
