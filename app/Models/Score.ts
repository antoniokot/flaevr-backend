import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Product from './Product'

export default class Score extends BaseModel {
  @column({ isPrimary: true })
  public idScore: number

  @belongsTo(() => Product)
  public product: BelongsTo<typeof Product>
}
