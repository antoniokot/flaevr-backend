import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class NutrientNutritionalFact extends BaseModel {
  @column({ isPrimary: true })
  public idNutrientNutritionalFacts: number

}
