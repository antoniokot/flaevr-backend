import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Ingredient extends BaseModel {
  @column({ isPrimary: true })
  public idIngredient: number
}
