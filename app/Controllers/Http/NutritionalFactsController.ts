import Hash from '@ioc:Adonis/Core/Hash'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';

export default class NutritionalFactsController {

  public async list(ctx: HttpContextContract) {
    
    const nutritionalFacts = await Database
      .query()
      .from('NutritionalFacts')
      .select('*');
    
    return nutritionalFacts;
  }

  public async index(ctx: HttpContextContract) {

    const idProduct = ctx.request.params().idProduct;

    const nutritionalFacts = await Database
      .query()
      .from('NutritionalFacts')
      .select('*')
      .where('NutritionalFacts.idProduct', idProduct);

    return nutritionalFacts;
  }

  public async store(ctx: HttpContextContract) {

    const body = ctx.request.body();

    const nutritionalFacts = await Database
      .table('NutritionalFacts')
      .returning(['idNutritionalFacts', 'idProduct', 'serving'])
      .insert({
        idProduct: body.idProduct,
        serving: body.serving,
      });

    return nutritionalFacts;
  }

  public async alter(ctx: HttpContextContract) {

    const id = ctx.request.params().id;
    const body = ctx.request.body();

    const nutritionalFacts = Database
      .from('NutritionalFacts')
      .where('idNutritionalFacts', id)
      .update({
        idProduct: body.idProduct,
        serving: body.serving,
      }, ['idNutritionalFacts', 'idProduct', 'serving']
      );

    return nutritionalFacts;
  }

  public async remove(ctx: HttpContextContract) {

    const id = ctx.request.params().id;

    const nutritionalFacts = Database
      .from('NutritionalFacts')
      .where('idNutritionalFacts', id)
      .delete();

    return nutritionalFacts;
  }
}
