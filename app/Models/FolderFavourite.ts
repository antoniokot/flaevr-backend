import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class FolderFavourite extends BaseModel {
  @column({ isPrimary: true })
  public idFolderFavourite: number
}
