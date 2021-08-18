import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Product from './Product'
import Ingredient from './Ingredient'
import Nutrient from './Nutrient'

export default class NutritionalFacts extends BaseModel {
  @column({ isPrimary: true })
  public idNutritionalFacts: number

  @belongsTo(() => Product)
  public product: BelongsTo<typeof Product>

  @manyToMany(() => Nutrient, {
    pivotTable: 'NutrientNutritionalFacts',
    localKey: 'idNutritionalFacts',
    pivotForeignKey: 'idNutritionalFacts',
    relatedKey: 'idNutrient',
    pivotRelatedForeignKey: 'idNutrient',
  })
  public nutrients: ManyToMany<typeof Nutrient>
}
