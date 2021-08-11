import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';

export default class FoldersController {

  public async list(ctx: HttpContextContract) {

    const idUser = ctx.request.params().idUser;
    
    const folders = await Database
      .query()
      .from('Folder')
      .select('*')
      .where('idUser', idUser);
    
    return folders;
  }

  public async index(ctx: HttpContextContract) {

    const id = ctx.request.params().id;

    const folder = await Database
      .query()
      .from('Folder')
      .select('*')
      .where('idFolder', id);

    return folder;
  }

  public async store(ctx: HttpContextContract) {

    const body = ctx.request.body();

    const folder = await Database
      .table('Folder')
      .returning(['idFolder', 'name', 'idUser'])
      .insert({
        name: body.name,
        idUser: body.idUser,
      });

    return folder;
  }

  public async alter(ctx: HttpContextContract) {

    const id = ctx.request.params().id;
    const body = ctx.request.body();

    const folder = Database
      .from('Folder')
      .where('idFolder', id)
      .update({
        name: body.name,
        idUser: body.idUser,
      }, ['idFolder', 'name', 'idUser']
      );

    return folder;
  }

  public async remove(ctx: HttpContextContract) {

    const id = ctx.request.params().id;

    const folder = Database
      .from('Folder')
      .where('idFolder', id)
      .delete();

    return folder;
  }
}
