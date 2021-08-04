import Product from './Product';
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm';

export default class Favourite extends BaseModel {
  @column({ isPrimary: true })
  public idFavourite: number

  @hasOne(() => Product)
  public product: HasOne<typeof Product>
}
