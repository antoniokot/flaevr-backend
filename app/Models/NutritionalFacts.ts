import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Product from './Product'
import Ingredient from './Ingredient'

export default class NutritionalFacts extends BaseModel {
  @column({ isPrimary: true })
  public idNutritionalFacts: number

  @belongsTo(() => Product)
  public product: BelongsTo<typeof Product>

  @manyToMany(() => Ingredient, {
    pivotTable: 'NutritionalFactsIngredient',
    localKey: 'idNutritionalFacts',
    pivotForeignKey: 'idNutritionalFacts',
    relatedKey: 'idIngredient',
    pivotRelatedForeignKey: 'idIngredient',
  })
  public ingredients: ManyToMany<typeof Ingredient>
}
