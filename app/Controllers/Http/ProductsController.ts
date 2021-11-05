import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';

export default class ProductsController {

  public async list(ctx: HttpContextContract) {
    
    const products = await Database
      .query()
      .from('Product')
      .select('*');
    
    return products;
  }

  public async index(ctx: HttpContextContract) {

    const id = ctx.request.params().id;

    const product = await Database
      .query()
      .from('Product')
      .select('*')
      .where('idProduct', id);

    return product;
  }

  public async getByBarcode(ctx: HttpContextContract) {

    const barcode = ctx.request.params().barcode;

    const product = await Database
      .query()
      .from('Product')
      .select('*')
      .where('barcode', barcode);

    return product;
  }

  public async getProductsByIdFolder(ctx: HttpContextContract) {
    const idFolder = ctx.request.params().idFolder;

    const products = await Database
    .query()
    .from('Product')
    .join('FolderProduct', 'FolderProduct.idProduct', '=', 'Product.idProduct')
    .join('Folder', 'Folder.idFolder', '=', 'FolderProduct.idFolder')
    .select([
      'Product.idProduct as idProduct', 
      'Product.name as name', 
      'Product.barcode as barcode', 
      'Product.pictureUrl as pictureUrl'
    ])
    .where('Folder.idFolder', idFolder);

    return products;
  }

  public async recents(ctx: HttpContextContract) {

    const idUser = ctx.request.params().idUser;

    const recents = await Database
      .query()
      .from('Product')
      .join('Scanned', 'Scanned.idProduct', '=', 'Product.idProduct')
      .join('User', 'User.idUser', '=', 'Scanned.idUser')
      .select([
        'Scanned.idScanned as idScanned',
        'User.idUser as idUser',
        'Product.idProduct as idProduct',
        'Product.name as name',
        'Product.barcode as barcode',
        'Product.pictureUrl as pictureUrl',
      ])
      .where('User.idUser', idUser)
      .orderBy('idScanned', 'desc');

    return recents;
  }

  public async getAllScannedByIdStamp(ctx: HttpContextContract) {

    const idStamp = ctx.request.params().idStamp;

    const scanneds = await Database
      .query()
      .from('Product')
      .join('Scanned', 'Scanned.idProduct', '=', 'Product.idProduct')
      .join('ProductStamp', 'ProductStamp.idProduct', '=', 'Product.idProduct')
      .join('Stamp', 'Stamp.idStamp', '=', 'ProductStamp.idStamp')
      .select([
        'Product.idProduct as idProduct',
        'Product.name as name',
        'Product.barcode as barcode',
        'Product.pictureUrl as pictureUrl',
      ])
      .where('Stamp.idStamp', idStamp);

    return scanneds;
  }

  public async store(ctx: HttpContextContract) {

    const body = ctx.request.body();

    const product = await Database
      .table('Product')
      .returning(['idProduct', 'name', 'barcode', 'pictureUrl'])
      .insert({
        name: body.name,
        barcode: body.barcode,
        pictureUrl: body.pictureUrl
      });

    return product;
  }

  public async alter(ctx: HttpContextContract) {

    const id = ctx.request.params().id;
    const body = ctx.request.body();

    const product = Database
      .from('Product')
      .where('idProduct', id)
      .update({
        name: body.name,
        barcode: body.barcode,
        pictureUrl: body.pictureUrl
      }, ['idProduct', 'name', 'barcode', 'pictureUrl']
    );

    return product;
  }

  public async remove(ctx: HttpContextContract) {

    const id = ctx.request.params().id;

    const product = Database
      .from('Product')
      .where('idProduct', id)
      .delete();

    return product;
  }
}
