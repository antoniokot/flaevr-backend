import Scanned from './Scanned';
import Favourite from './Favourite';
import { BaseModel, belongsTo, column, BelongsTo } from '@ioc:Adonis/Lucid/Orm';

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public idProduct: number

  @belongsTo(() => Favourite)
  public favourite: BelongsTo<typeof Favourite>

  @belongsTo(() => Scanned)
  public scanned: BelongsTo<typeof Scanned>
}
