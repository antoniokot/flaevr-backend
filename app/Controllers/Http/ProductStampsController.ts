import Hash from '@ioc:Adonis/Core/Hash';
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Database from '@ioc:Adonis/Lucid/Database';

export default class ProductStampsController {

  public async list(ctx: HttpContextContract) {

    const idProduct = ctx.request.params().idProduct;
   
    const productsStamps = await Database
      .query()
      .from('ProductStamp')
      .select('*')
      .where('idProduct', idProduct);
    
    return productsStamps;
  }

  public async index(ctx: HttpContextContract) {

    const id = ctx.request.params().id;

    const productStamps = await Database
      .query()
      .from('ProductStamp')
      .select('*')
      .where('idProductStamp', id);

    return productStamps;
  }

  public async store(ctx: HttpContextContract) {

    const body = ctx.request.body();

    const productStamps = await Database
      .table('ProductStamp')
      .returning(['idProductStamp', 'idProduct', 'idStamp'])
      .insert({
        idProduct: body.idProduct,
        idStamp: body.idStamp,
      });

    return productStamps;
  }

  public async alter(ctx: HttpContextContract) {

    const id = ctx.request.params().id;
    const body = ctx.request.body();

    const productStamps = Database
      .from('ProductStamp')
      .where('idProductStamp', id)
      .update({
        idProduct: body.idProduct,
        idStamp: body.idStamp,
      }, ['idProductStamp', 'idProduct', 'idStamp']
      );

    return productStamps;
  }

  public async remove(ctx: HttpContextContract) {

    const id = ctx.request.params().id;

    const productStamps = Database
      .from('ProductStamp')
      .where('idProductStamp', id)
      .delete();

    return productStamps;
  }
}
