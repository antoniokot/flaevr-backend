import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class AdditionalInformation extends BaseModel {
  @column({ isPrimary: true })
  public idAdditionalInformation: number

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>
}
