import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AlterScoresDropColumns extends BaseSchema {
  protected tableName = 'Score'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.float('natural')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
