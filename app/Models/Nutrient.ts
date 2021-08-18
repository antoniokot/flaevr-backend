import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'

export default class Nutrient extends BaseModel {
  @column({ isPrimary: true })
  public idNutrient: number
}
