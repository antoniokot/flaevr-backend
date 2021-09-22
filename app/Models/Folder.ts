import User from './User';
import Favourite from './Favourite';
import Product from './Product';

import { BaseModel, column, belongsTo, BelongsTo, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm';

export default class Folder extends BaseModel {
  @column({ isPrimary: true })
  public idFolder: number

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @manyToMany(() => Product, {
    pivotTable: 'FolderProduct',
    localKey: 'idFolder',
    pivotForeignKey: 'idFolder',
    relatedKey: 'idProduct',
    pivotRelatedForeignKey: 'idProduct',
  })
  public products: ManyToMany<typeof Product>
}
