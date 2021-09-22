import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class FolderProduct extends BaseModel {
  @column({ isPrimary: true })
  public idFolderProduct: number
}
