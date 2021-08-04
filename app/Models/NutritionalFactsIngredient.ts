import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class NutritionalFactsIngredient extends BaseModel {
  @column({ isPrimary: true })
  public idNutritionalFactsIngredient: number
}
