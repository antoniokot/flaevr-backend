import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AlterProducts extends BaseSchema {
  protected tableName = 'Product'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('pictureFileName')
      table.dropColumn('pictureData')
      table.string('pictureUrl')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
