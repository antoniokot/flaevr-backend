import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AlterUsers extends BaseSchema {
  protected tableName = 'User'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('avatar')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
