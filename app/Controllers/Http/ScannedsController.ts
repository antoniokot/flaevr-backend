import Hash from '@ioc:Adonis/Core/Hash'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';

export default class ScannedsController {

  public async list(ctx: HttpContextContract) {

    const idUser = ctx.request.params().idUser;
    
    const scanns = await Database
      .query()
      .from('Scanned')
      .select('*')
      .where('idUser', idUser);
    
    return scanns;
  }

  public async index(ctx: HttpContextContract) {

    const id = ctx.request.params().id;

    const scann = await Database
      .query()
      .from('Scanned')
      .select('*')
      .where('idScanned', id);

    return scann;
  }

  public async countScannedsByIdStamp(ctx: HttpContextContract) {

    const idStamp = ctx.request.params().idStamp;
    const idUser = ctx.request.params().idUser;

    const scanneds = await Database
      .query()
      .from('Scanned')
      .count('* as total')
      .join('Product', 'Product.idProduct', '=', 'Scanned.idProduct')
      .join('ProductStamp', 'ProductStamp.idProduct', '=', 'Product.idProduct')
      .join('Stamp', 'Stamp.idStamp', '=', 'ProductStamp.idStamp')
      .where('Stamp.idStamp', idStamp)
      .andWhere('Scanned.idUser', idUser);

    return scanneds;
  }

  public async trendings(ctx: HttpContextContract) {

    const trendings = await Database
    .query()
    .from('Scanned')
    .join('Product', 'Product.idProduct', '=', 'Scanned.idProduct')
    .select([
      'Product.idProduct as idProduct',
      'Product.name as name',
      'Product.barcode as barcode',
      'Product.pictureUrl as pictureUrl',
    ])
    .distinct('Product.idProduct')

    return trendings;
  }

  public async store(ctx: HttpContextContract) {

    const body = ctx.request.body();

    const scann = await Database
      .table('Scanned')
      .returning(['idScanned', 'idUser', 'idProduct'])
      .insert({
        idUser: body.idUser,
        idProduct: body.idProduct,
      });

    return scann;
  }

  public async alter(ctx: HttpContextContract) {

    const id = ctx.request.params().id;
    const body = ctx.request.body();

    const scann = Database
      .from('Scanned')
      .where('idScanned', id)
      .update({
        idUser: body.idUser,
        idProduct: body.idProduct,
      }, ['idScanned', 'idUser', 'idProduct']
      );

    return scann;
  }

  public async remove(ctx: HttpContextContract) {

    const id = ctx.request.params().id;

    const scann = Database
      .from('Scanned')
      .where('idScanned', id)
      .delete();

    return scann;
  }
}
