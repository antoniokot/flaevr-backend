import Folder from './Folder';
import Scanned from './Product';
import { BaseModel, belongsTo, column, hasMany, HasMany, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm';
import { BelongsTo } from '@ioc:Adonis/Lucid/Relations';
import AdditionalInformation from './AdditionalInformation';

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public idUser: number

  @hasMany(() => Folder)
  public folders: HasMany<typeof Folder>

  @hasOne(() => AdditionalInformation)
  public AdditionalInformation: HasOne<typeof AdditionalInformation>

  @belongsTo(() => Scanned)
  public scanned: BelongsTo<typeof Scanned>
}