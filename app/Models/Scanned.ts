import User from './User';
import Product from './Product';
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm';

export default class Scanned extends BaseModel {
  @column({ isPrimary: true })
  public idScanned: number

  @hasMany(() => User)
  public users: HasMany<typeof User>

  @hasMany(() => Product)
  public products: HasMany<typeof Product>
}
