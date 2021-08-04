import User from './User';
import Product from './Product';
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm';
import { DateTime } from 'luxon';

export default class Scanned extends BaseModel {
  @column({ isPrimary: true })
  public idScanned: number

  @column.dateTime({autoCreate: true})
  public createdAt: DateTime

  @hasMany(() => User)
  public users: HasMany<typeof User>

  @hasMany(() => Product)
  public products: HasMany<typeof Product>
}
