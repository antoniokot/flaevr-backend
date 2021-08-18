import Scanned from './Scanned';
import Favourite from './Favourite';
import { BaseModel, belongsTo, column, BelongsTo, manyToMany, ManyToMany, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm';
import Stamp from './Stamp';
import NutritionalFacts from './NutritionalFacts';
import Ingredient from './Ingredient';

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public idProduct: number

  @belongsTo(() => Favourite)
  public favourite: BelongsTo<typeof Favourite>

  @belongsTo(() => Scanned)
  public scanned: BelongsTo<typeof Scanned>

  @manyToMany(() => Stamp, {
    pivotTable: 'ProductStamp',
    localKey: 'idProduct',
    pivotForeignKey: 'idProduct',
    relatedKey: 'idStamp',
    pivotRelatedForeignKey: 'idStamp',
  })
  public stamps: ManyToMany<typeof Stamp>

  @manyToMany(() => Ingredient, {
    pivotTable: 'ProductIngredient',
    localKey: 'idProduct',
    pivotForeignKey: 'idProduct',
    relatedKey: 'idIngredient',
    pivotRelatedForeignKey: 'idIngredient',
  })
  public ingredients: ManyToMany<typeof Ingredient>

  @hasOne(() => NutritionalFacts)
  public nutritionalFacts: HasOne<typeof NutritionalFacts>
}
