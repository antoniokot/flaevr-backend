import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class FolderFavorite extends BaseModel {
  @column({ isPrimary: true })
  public idFolderFavorite: number
}
