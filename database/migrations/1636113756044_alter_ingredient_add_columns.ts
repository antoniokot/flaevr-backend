import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AlterIngredientAddColumns extends BaseSchema {
  protected tableName = 'Ingredient'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('isAllergenic')
      // table.dropColumn('created_at')
      // table.dropColumn('updated_at')
      table.integer('hasMilk')
      table.integer('hasEgg')
      table.integer('hasGluten')
      table.integer('hasSeafood')
      table.integer('hasFish')
      table.integer('hasSugar')
      table.integer('hasSoy')
      table.integer('hasNuts')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
