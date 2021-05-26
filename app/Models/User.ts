import Folder from './Folder';
import Scanned from './Product';
import { BaseModel, belongsTo, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm';
import { BelongsTo } from '@ioc:Adonis/Lucid/Relations';

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public idUser: number

  @hasMany(() => Folder)
  public folders: HasMany<typeof Folder>

  @belongsTo(() => Scanned)
  public scanned: BelongsTo<typeof Scanned>
}