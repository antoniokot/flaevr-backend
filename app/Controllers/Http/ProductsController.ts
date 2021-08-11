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

  public async store(ctx: HttpContextContract) {

    const body = ctx.request.body();

    const product = await Database
      .table('Product')
      .returning(['idProduct', 'name', 'barcode', 'pictureFileName', 'pictureData'])
      .insert({
        name: body.name,
        barcode: body.barcode,
        // pictureFileName: body.pictureFileName,
        // pictureData: body.pictureData,
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
        // pictureFileName: body.pictureFileName,
        // pictureData: body.pictureData,
      }, ['idProduct', 'name', 'barcode', 'pictureFileName', 'pictureData']
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
