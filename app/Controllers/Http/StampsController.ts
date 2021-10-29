import Hash from '@ioc:Adonis/Core/Hash'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';

export default class StampsController {

  public async list(ctx: HttpContextContract) {

    const stamps = await Database
      .query()
      .from('Stamp')
      .select('*');
    
    return stamps;
  }

  public async index(ctx: HttpContextContract) {

    const id = ctx.request.params().id;

    const stamp = await Database
      .query()
      .from('Stamp')
      .select('*')
      .where('idStamp', id);

    return stamp;
  }

  public async getStampsByIdProduct(ctx: HttpContextContract) {

    const idProduct = ctx.request.params().idProduct;

    const stamps = await Database
      .query()
      .from('Stamp')
      .join('ProductStamp', 'ProductStamp.idStamp', '=', 'Stamp.idStamp')
      .join('Product', 'ProductStamp.idProduct', '=', 'Product.idProduct')
      .select('Stamp.idStamp as idStamp')
      .select('Stamp.name as name') 
      .where('Product.idProduct', idProduct);

    return stamps;
  }

  public async store(ctx: HttpContextContract) {

    const body = ctx.request.body();

    const stamp = await Database
      .table('Stamp')
      .returning(['idStamp', 'name'])
      .insert({
        name: body.name,
      });

    return stamp;
  }

  public async alter(ctx: HttpContextContract) {

    const id = ctx.request.params().id;
    const body = ctx.request.body();

    const stamp = Database
      .from('Stamp')
      .where('idStamp', id)
      .update({
        name: body.name,
      }, ['idStamp', 'name']
      );

    return stamp;
  }

  public async remove(ctx: HttpContextContract) {

    const id = ctx.request.params().id;

    const stamp = Database
      .from('Stamp')
      .where('idStamp', id)
      .delete();

    return stamp;
  }
}
