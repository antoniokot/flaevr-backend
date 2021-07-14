import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Product from './Product'

export default class NutritionalFacts extends BaseModel {
  @column({ isPrimary: true })
  public idNutritionalFacts: number

  @belongsTo(() => Product)
  public product: BelongsTo<typeof Product>
}
