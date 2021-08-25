import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Hash from '@ioc:Adonis/Core/Hash'
import Database from '@ioc:Adonis/Lucid/Database';

export default class FolderFavouritesController {

  public async list(ctx: HttpContextContract) {

    const idFolder = ctx.request.params().idFolder;
    
    const folderFavourites = await Database
      .query()
      .from('FolderFavourite')
      .select('*')
      .where('idFolder', idFolder);
    
    return folderFavourites;
  }

  public async index(ctx: HttpContextContract) {

    const id = ctx.request.params().id;

    const folderFavourites = await Database
      .query()
      .from('FolderFavourite')
      .select('*')
      .where('idFolderFavourite', id);

    return folderFavourites;
  }

  public async store(ctx: HttpContextContract) {

    const body = ctx.request.body();

    const folderFavourite = await Database
      .table('FolderFavourite')
      .returning(['idFolderFavourite', 'idFolder', 'idFavourite'])
      .insert({
        idFolder: body.idFolder,
        idFavourite: body.idFavourite,
      });

    return folderFavourite;
  }

  public async alter(ctx: HttpContextContract) {

    const id = ctx.request.params().id;
    const body = ctx.request.body();

    const folderFavourite = Database
      .from('FolderFavourite')
      .where('idFolderFavourite', id)
      .update({
        idFolder: body.idFolder,
        idFavourite: body.idFavourite,
      }, ['idFolderFavourite', 'idFolder', 'idFavourite']
      );

    return folderFavourite;
  }

  public async remove(ctx: HttpContextContract) {

    const id = ctx.request.params().id;

    const folderFavourite = Database
      .from('FolderFavourite')
      .where('idFolderFavourite', id)
      .delete();

    return folderFavourite;
  }
}
