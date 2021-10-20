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

  public async recents(ctx: HttpContextContract) {

    const idUser = ctx.request.params().idUser;

    const recents = await Database
      .query()
      .from('Scanned')
      .select('*')
      .where('idUser', idUser)
      .orderBy('idScanned', 'desc');

    return recents;
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
