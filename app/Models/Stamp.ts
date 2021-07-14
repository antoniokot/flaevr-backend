import { DateTime } from 'luxon'
import { BaseModel, column, hasManyThrough } from '@ioc:Adonis/Lucid/Orm'

export default class Stamp extends BaseModel {
  @column({ isPrimary: true })
  public idProductStamp: number
}
