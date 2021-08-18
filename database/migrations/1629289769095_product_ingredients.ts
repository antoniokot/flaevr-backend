import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ProductIngredients extends BaseSchema {
  protected tableName = 'ProductIngredient'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('idProductIngredient')
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
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
