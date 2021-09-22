import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Hash from '@ioc:Adonis/Core/Hash'
import Database from '@ioc:Adonis/Lucid/Database';

export default class FolderProductsController {

  public async list(ctx: HttpContextContract) {

    const idFolder = ctx.request.params().idFolder;
    
    const folderProducts = await Database
      .query()
      .from('FolderProduct')
      .select('*')
      .where('idFolder', idFolder);
    
    return folderProducts;
  }

  public async index(ctx: HttpContextContract) {

    const id = ctx.request.params().id;

    const folderProducts = await Database
      .query()
      .from('FolderProduct')
      .select('*')
      .where('idFolderProduct', id);

    return folderProducts;
  }

  public async store(ctx: HttpContextContract) {

    const body = ctx.request.body();

    const folderProduct = await Database
      .table('FolderProduct')
      .returning(['idFolderProduct', 'idFolder', 'idProduct'])
      .insert({
        idFolder: body.idFolder,
        idProduct: body.idProduct,
      });

    return folderProduct;
  }

  public async alter(ctx: HttpContextContract) {

    const id = ctx.request.params().id;
    const body = ctx.request.body();

    const folderProduct = Database
      .from('FolderProduct')
      .where('idFolderProduct', id)
      .update({
        idFolder: body.idFolder,
        idProduct: body.idProduct,
      }, ['idFolderProduct', 'idFolder', 'idProduct']
      );

    return folderProduct;
  }

  public async remove(ctx: HttpContextContract) {

    const id = ctx.request.params().id;

    const folderProduct = Database
      .from('FolderProduct')
      .where('idFolderProduct', id)
      .delete();

    return folderProduct;
  }
}
