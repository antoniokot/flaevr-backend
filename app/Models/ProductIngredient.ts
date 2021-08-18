import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ProductIngredient extends BaseModel {
  @column({ isPrimary: true })
  public idProductIngredient: number
}
