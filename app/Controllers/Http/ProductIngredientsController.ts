import Hash from '@ioc:Adonis/Core/Hash';
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Database from '@ioc:Adonis/Lucid/Database';

export default class ProductIngredientsController {

  public async list(ctx: HttpContextContract) {
    
    const productsIngredients = await Database
      .query()
      .from('ProductIngredient')
      .select('*');
    
    return productsIngredients;
  }

  public async index(ctx: HttpContextContract) {

    const id = ctx.request.params().id;

    const productsIngredient = await Database
      .query()
      .from('ProductIngredient')
      .select('*')
      .where('idProductIngredient', id);

    return productsIngredient;
  }

  public async store(ctx: HttpContextContract) {

    const body = ctx.request.body();

    const productsIngredient = await Database
      .table('ProductIngredient')
      .returning(['idProductIngredient', 'idProduct', 'idIngredient'])
      .insert({
        idProduct: body.idProduct,
        idIngredient: body.idIngredient
      });

    return productsIngredient;
  }

  public async alter(ctx: HttpContextContract) {

    const id = ctx.request.params().id;
    const body = ctx.request.body();

    const productsIngredient = Database
      .from('ProductIngredient')
      .where('idProductIngredient', id)
      .update({
        idProduct: body.idProduct,
        idIngredient: body.idIngredient
      }, ['idProductIngredient', 'idProduct', 'idIngredient']
    );

    return productsIngredient;
  }

  public async remove(ctx: HttpContextContract) {

    const id = ctx.request.params().id;

    const productsIngredient = Database
      .from('ProductIngredient')
      .where('idProductIngredient', id)
      .delete();

    return productsIngredient;
  }
}
