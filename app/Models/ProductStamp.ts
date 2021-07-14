import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ProductStamp extends BaseModel {
  @column({ isPrimary: true })
  public idProductStamp: number
}
