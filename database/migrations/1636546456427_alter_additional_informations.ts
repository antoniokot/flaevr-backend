import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AlterAdditionalInformations extends BaseSchema {
  protected tableName = 'AdditionalInformation'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('weight')
      table.dropColumn('idealWeight')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}