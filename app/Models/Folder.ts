import User from './User';
import Favourite from './Favourite';

import { BaseModel, column, belongsTo, BelongsTo, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm';

export default class Folder extends BaseModel {
  @column({ isPrimary: true })
  public idFolder: number

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @manyToMany(() => Favourite, {
    pivotTable: 'FolderFavourite',
    localKey: 'idFolder',
    pivotForeignKey: 'idFolder',
    relatedKey: 'idFavourite',
    pivotRelatedForeignKey: 'idFavourite',
  })
  public favorites: ManyToMany<typeof Favourite>
}
